<script setup lang="ts">
import CountryCard from '@/components/CountryCard.vue';
import ThePreloader from '@/components/ThePreloader.vue';
import TheError from '@/components/TheError.vue';
import { useCountries } from '@/hooks/useCountries';

const { list, status, error } = useCountries();
</script>

<template>
  <TheError v-if="error" />
  <ThePreloader v-else-if="status === 'loading'" />
  <ul
    v-else
    class="grid grid-cols-[min(100%,328px)] justify-center gap-[50px] pb-20 pt-[42px] md:grid-cols-2 md:gap-x-[73px] md:gap-y-[76px] md:pt-[49px] grid-3:grid-cols-3 grid-4:grid-cols-4"
  >
    <TransitionGroup
      enter-active-class="duration-300 ease"
      enter-from-class="opacity-0"
      enter-to-class="opacity-1"
      leave-active-class="duration-300"
      leave-from-class="opacity-1"
      leave-to-class="opacity-0"
    >
      <li v-for="country in list" :key="country.name">
        <CountryCard :country="country" />
      </li>
    </TransitionGroup>
  </ul>
</template>
