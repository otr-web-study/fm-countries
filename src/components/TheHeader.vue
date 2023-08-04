<script setup lang="ts">
import TheContainer from './TheContainer.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';
</script>

<template>
  <header>
    <TheContainer class="flex items-center justify-between py-8">
      <h2>Where is the world?</h2>
      <ThemeSwitcher />
    </TheContainer>
  </header>
</template>
