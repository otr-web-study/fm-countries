import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import axios from 'axios';
import { useDetailsStore } from '@/stores/details-store';
import { useCountriesStore } from '@/stores/countries-store';
import { filterByCode } from '@/config';
import { convertDetails } from '@/utils/utils';
import type { ApiCountryDetails } from '@/types';

export const useDetails = () => {
  const detailsStore = useDetailsStore();
  const { setFulfilled, setPending, setRejected } = detailsStore;
  const { details, status, error } = storeToRefs(detailsStore);
  const { setNameByCode } = useCountriesStore();
  const route = useRoute();
  const cc = ref(Array.isArray(route.params.code) ? route.params.code[0] : route.params.code);

  const detailsByCode = computed(() => (details.value?.cca3 === cc.value ? details.value : null));

  const fetchDetails = async () => {
    if (status.value === 'loading' || details.value?.cca3 === cc.value) return;

    setPending();

    try {
      const { data } = await axios.get<ApiCountryDetails>(filterByCode(cc.value));

      const details = convertDetails(data);
      setFulfilled(details);
      setNameByCode(details.cca3, details.name);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setRejected(error.message);
      }
      setRejected('Unknown error.');
    }
  };

  fetchDetails();

  watch(
    () => route.params.code,
    () => {
      cc.value = Array.isArray(route.params.code) ? route.params.code[0] : route.params.code;
      fetchDetails();
    },
    { deep: true },
  );

  return { details: detailsByCode, status, error };
};
