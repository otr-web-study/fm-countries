<script setup lang="ts">
import MoonOutlined from '@/components/icons/MoonOutlined.vue';
import MoonFilled from '@/components/icons/MoonFilled.vue';
import { useTheme } from '@/hooks/useTheme';

const { theme, toggleTheme } = useTheme();
</script>

<template>
  <div @click="toggleTheme" class="group flex cursor-pointer items-center gap-2 md:gap-3">
    <MoonOutlined
      v-if="theme === 'light'"
      class="h-[18px] w-[18px] transition-transform duration-[400ms] group-hover:scale-110"
    />
    <MoonFilled
      v-else
      class="h-[18px] w-[18px] fill-txt transition-transform duration-[400ms] group-hover:scale-110"
    />
    <span class="text-[15px] capitalize md:text-base">{{ theme }} Mode</span>
  </div>
</template>
