<script setup lang="ts">
import AppSelect from './AppSelect.vue';
import { useRegion } from '@/hooks/useRegion';
import type { Region } from '@/types/region';

const [region, handleSelectRegion] = useRegion();

const options: Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
</script>

<template>
  <div class="flex justify-between">
    <div></div>
    <AppSelect
      :options="options"
      :value="region"
      placeholder="Filter by Region"
      @select="handleSelectRegion($event as Region)"
    />
  </div>
</template>
