import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Region } from '@/types/region';

export const useControlsStore = defineStore('controls-store', () => {
  const search = ref('');
  const region = ref<Region | ''>('');

  const setSearch = (value: string) => {
    search.value = value;
  };

  const setRegion = (value: Region | '') => {
    region.value = value;
  };

  const clearControls = () => {
    search.value = '';
    region.value = '';
  };

  return { search, region, setSearch, setRegion, clearControls };
});
