import { useThemeStore } from '@/stores/theme-store';
import { storeToRefs } from 'pinia';
import { watchEffect } from 'vue';

export const useTheme = () => {
  const store = useThemeStore();
  const { theme } = storeToRefs(store);

  const toggleTheme = () => {
    store.setTheme(theme.value === 'light' ? 'dark' : 'light');
  };

  watchEffect(() => {
    document.body.setAttribute('data-theme', theme.value);
  });

  return { theme, toggleTheme };
};
