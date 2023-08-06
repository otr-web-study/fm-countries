import type { Ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useControlsStore } from '@/stores/controls-store';
import type { Region } from '@/types';

interface onSelect {
  (region: Region | ''): void;
}

export const useRegion = (): [Ref<Region | ''>, onSelect] => {
  const store = useControlsStore();
  const { region } = storeToRefs(store);

  const handleSelectRegion: onSelect = (region) => {
    store.setRegion(region);
  };

  return [region, handleSelectRegion];
};
