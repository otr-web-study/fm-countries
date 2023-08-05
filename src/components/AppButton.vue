<script setup lang="ts">
const emit = defineEmits<{ (e: 'click'): void }>();
</script>

<template>
  <button
    class="flex items-center justify-center gap-2 rounded-radii bg-ui px-7 py-2 text-base font-semibold shadow-sh-1 transition-shadow-4 hover:shadow-sh-2"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>
