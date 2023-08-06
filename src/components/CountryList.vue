<script setup lang="ts">
import { useCountries } from '@/hooks/useCountries';

const { list, status, error } = useCountries();
</script>

<template>
  <h2 v-if="error">Couldn't fetch data.</h2>
  <h2 v-if="status === 'loading'">Loading...</h2>
  <ul v-else class="pt-[42px] md:pt-[49px]">
    <li v-for="country in list" :key="country.name">{{ country.name }}</li>
  </ul>
</template>
