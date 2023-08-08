<script setup lang="ts">
import { toRefs } from 'vue';
import { useBorder } from '@/hooks/useBorder';
const props = defineProps<{ code: string }>();
const { code } = toRefs(props);
const name = useBorder(code.value);
</script>

<template>
  <RouterLink :to="{ name: 'details', params: { code } }">
    <span
      class="inline-block min-w-[97px] rounded-radii bg-ui px-[10px] py-[5px] text-center text-sm shadow-sh-1 transition-transform duration-300 hover:-translate-y-[2px] hover:translate-x-[2px] hover:shadow-sh-2 md:text-base"
      >{{ name }}</span
    >
  </RouterLink>
</template>
