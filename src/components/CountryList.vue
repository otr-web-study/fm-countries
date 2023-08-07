<script setup lang="ts">
import CountryCard from './CountryCard.vue';
import { useCountries } from '@/hooks/useCountries';

const { list, status, error } = useCountries();
</script>

<template>
  <h2 v-if="error">Couldn't fetch data.</h2>
  <h2 v-if="status === 'loading'">Loading...</h2>
  <ul
    v-else
    class="grid grid-cols-[min(100%,328px)] justify-center gap-[50px] pt-[42px] md:grid-cols-[repeat(auto-fit,minmax(260px,1fr))] md:gap-x-[73px] md:gap-y-[76px] md:pt-[49px]"
  >
    <li v-for="country in list" :key="country.name">
      <CountryCard :country="country" />
    </li>
  </ul>
</template>
