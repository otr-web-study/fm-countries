<script setup lang="ts">
interface LinkProps {
  to: {
    name: string;
  };
  class?: string | Record<string, string>;
  activeClass?: string;
}

const props = defineProps<LinkProps>();
const emits = defineEmits<{ (e: 'click'): void }>();
</script>

<template>
  <RouterLink
    class="cursor-pointer transition-opacity duration-300 hover:opacity-70"
    v-bind="props"
    @click.prevent="emits('click')"
  >
    <slot></slot>
  </RouterLink>
</template>
