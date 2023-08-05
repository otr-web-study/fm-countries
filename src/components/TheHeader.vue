<script setup lang="ts">
import TheContainer from './TheContainer.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';
import AppLink from './AppLink.vue';
</script>

<template>
  <header class="bg-ui py-10 shadow-sh-1 md:py-8">
    <TheContainer class="flex items-center justify-between">
      <AppLink :to="{ name: 'home' }" class="text-lg font-extrabold md:text-2xl"
        >Where is the world?</AppLink
      >
      <ThemeSwitcher />
    </TheContainer>
  </header>
</template>
