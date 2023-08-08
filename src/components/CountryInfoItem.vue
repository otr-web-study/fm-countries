<script setup lang="ts">
interface InfoItemProps {
  name: string;
  value?: string | number;
}

withDefaults(defineProps<InfoItemProps>(), { value: '-' });
</script>

<template>
  <p>
    <span class="font-semibold">{{ name }}:</span>
    {{ value }}
  </p>
</template>
