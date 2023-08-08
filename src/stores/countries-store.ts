import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { Country, Status } from '@/types';

export const useCountriesStore = defineStore('countries-store', () => {
  const list = ref<Country[]>([]);
  const status = ref<Status>('idle');
  const error = ref<string | null>(null);
  const codeNameMap = ref<Record<string, string>>({});

  const setPending = () => {
    status.value = 'loading';
    error.value = null;
  };

  const setRejected = (err: string) => {
    status.value = 'rejected';
    error.value = err;
  };

  const setFulfilled = (data: Country[]) => {
    status.value = 'received';
    list.value = data;
  };

  const loadCodeNameMap = (data: Record<string, string>) => {
    codeNameMap.value = data;
  };

  const setNameByCode = (key: string, value: string) => {
    codeNameMap.value[key] = value;
  };

  const sorted = computed(() => [...list.value].sort((a, b) => (a.name < b.name ? -1 : 1)));

  return {
    list: sorted,
    status,
    error,
    codeNameMap,
    setPending,
    setRejected,
    setFulfilled,
    loadCodeNameMap,
    setNameByCode,
  };
});
