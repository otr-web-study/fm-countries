import { ref } from 'vue';
import { defineStore } from 'pinia';

export type Theme = 'light' | 'dark';

export const useThemeStore = defineStore('theme-store', () => {
  const theme = ref<Theme>('light');

  const setTheme = (value: Theme) => {
    theme.value = value;
  };

  return { theme, setTheme };
});
