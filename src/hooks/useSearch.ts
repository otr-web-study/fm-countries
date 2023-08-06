import type { Ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useControlsStore } from '@/stores/controls-store';

interface onSearch {
  (value: string): void;
}

export const useSearch = (): [Ref<string>, onSearch] => {
  const store = useControlsStore();
  const { search } = storeToRefs(store);

  const handleSearch: onSearch = (value) => {
    store.setSearch(value);
  };

  return [search, handleSearch];
};
