import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { CountryDetails, Status } from '@/types';

export const useDetailsStore = defineStore('detail-store', () => {
  const details = ref<CountryDetails | null>(null);
  const status = ref<Status>('idle');
  const error = ref<string | null>(null);

  const setPending = () => {
    status.value = 'loading';
    error.value = null;
  };

  const setRejected = (err: string) => {
    status.value = 'rejected';
    error.value = err;
  };

  const setFulfilled = (data: CountryDetails) => {
    status.value = 'received';
    details.value = data;
  };

  return { details, status, error, setPending, setRejected, setFulfilled };
});
