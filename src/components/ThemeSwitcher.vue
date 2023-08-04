<script setup lang="ts">
import MoonOutlined from '@/components/icons/MoonOutlined.vue';
import MoonFilled from '@/components/icons/MoonFilled.vue';
import { useTheme } from '@/hooks/useTheme';

const { theme, toggleTheme } = useTheme();
</script>

<template>
  <div @click="toggleTheme">
    <MoonOutlined v-if="theme === 'light'" />
    <MoonFilled v-else />
    <span>{{ theme }} Mode</span>
  </div>
</template>
