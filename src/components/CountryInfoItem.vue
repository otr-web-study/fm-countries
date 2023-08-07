<script setup lang="ts">
import { capitalize, formatVal } from '@/utils/utils';
defineProps<{ name: string; value: string | number }>();
</script>

<template>
  <p>
    <span class="font-semibold">{{ capitalize(name) }}:</span>
    {{ formatVal(value) }}
  </p>
</template>
