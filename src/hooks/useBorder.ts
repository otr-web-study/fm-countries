import { computed } from 'vue';
import axios from 'axios';
import { nameByCode } from '@/config';
import { useCountriesStore } from '@/stores/countries-store';
import type { ApiCountryName } from '@/types';

interface BorderName {
  name: ApiCountryName;
}

export const useBorder = (cc: string) => {
  const store = useCountriesStore();
  const border = computed(() => store.codeNameMap[cc]);

  const fetchBorder = async () => {
    try {
      const { data } = await axios.get<BorderName>(nameByCode(cc));

      store.setNameByCode(cc, data.name.common);
    } catch (error) {
      console.log(error);
    }
  };

  if (!border.value) {
    fetchBorder();
  }

  return border;
};
