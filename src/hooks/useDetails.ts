import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import axios from 'axios';
import { useDetailsStore } from '@/stores/details-store';
import { useCountriesStore } from '@/stores/countries-store';
import { filterByCode } from '@/config';
import { convertDetails } from '@/utils/utils';
import type { ApiCountryDetails } from '@/types';

export const useDetails = (cc: string) => {
  const detailsStore = useDetailsStore();
  const { setFulfilled, setPending, setRejected } = detailsStore;
  const { details, status, error } = storeToRefs(detailsStore);
  const { setNameByCode } = useCountriesStore();

  const detailsByCode = computed(() => (details.value?.cca3 === cc ? details.value : null));

  const fetchDetails = async () => {
    if (status.value === 'loading' || details.value?.cca3 === cc) return;

    setPending();

    try {
      const { data } = await axios.get<ApiCountryDetails>(filterByCode(cc));

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

  if (!detailsByCode.value) {
    fetchDetails();
  }

  return { details: detailsByCode, status, error };
};
