import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import axios from 'axios';
import { useCountriesStore } from '@/stores/countries-store';
import { useControlsStore } from '@/stores/controls-store';
import { ALL_COUNTRIES } from '@/config';
import type { ApiCountry } from '@/types';

export const useCountries = () => {
  const countriesStore = useCountriesStore();
  const { setFulfilled, setPending, setRejected } = countriesStore;
  const { list, status, error } = storeToRefs(countriesStore);
  const { region, search } = storeToRefs(useControlsStore());

  const length = computed(() => list.value.length);

  const fetchCountries = async () => {
    if (status.value === 'loading') return;

    setPending();

    try {
      const { data } = await axios.get<ApiCountry[]>(ALL_COUNTRIES);
      setFulfilled(
        data.map((c) => ({
          ...c,
          name: c.name.official ? c.name.official : c.name.common,
          capital: c.capital.length ? c.capital[0] : '',
        })),
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setRejected(error.message);
      }
      setRejected('Unknown error.');
    }
  };

  const visibleCountries = computed(() =>
    list.value.filter(
      (item) =>
        item.name.toLowerCase().includes(search.value.toLocaleLowerCase()) &&
        item.region.includes(region.value),
    ),
  );

  if (!length.value) {
    fetchCountries();
  }

  return { list: visibleCountries, status, error };
};
