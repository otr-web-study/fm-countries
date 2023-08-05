import type { Ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useControlsStore } from '@/stores/controls-store';

interface onSearch {
  (e: Event): void;
}

export const useSearch = (): [Ref<string>, onSearch] => {
  const store = useControlsStore();
  const { search } = storeToRefs(store);

  const handleSearch: onSearch = (e) => {
    store.setSearch((e.target as HTMLInputElement).value);
  };

  return [search, handleSearch];
};
