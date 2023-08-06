<script setup lang="ts">
import AppSelect from './AppSelect.vue';
import TheSearch from './TheSearch.vue';
import { useRegion } from '@/hooks/useRegion';
import { useSearch } from '@/hooks/useSearch';
import type { Region } from '@/types';

const [region, handleSelectRegion] = useRegion();
const [search, handleSearch] = useSearch();

const options: Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
</script>

<template>
  <div class="flex flex-col items-start justify-between gap-[50px] md:flex-row md:gap-6">
    <TheSearch :value="search" placeholder="Search for a country..." @search="handleSearch" />
    <AppSelect
      :options="options"
      :value="region"
      placeholder="Filter by Region"
      @select="handleSelectRegion($event as Region)"
      @clear="handleSelectRegion('')"
    />
  </div>
</template>
