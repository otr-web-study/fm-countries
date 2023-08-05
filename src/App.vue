<script setup lang="ts">
import TheContainer from './components/TheContainer.vue';
import TheHeader from './components/TheHeader.vue';
</script>

<template>
  <TheHeader />
  <main>
    <TheContainer>
      <RouterView />
    </TheContainer>
  </main>
</template>
