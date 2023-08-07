<script setup lang="ts">
import SearchOutlined from '@/components/icons/SearchOutlined.vue';

interface SearchProps {
  value: string;
  placeholder?: string;
}

defineProps<SearchProps>();
const emits = defineEmits<{ (e: 'search', value: string): void }>();

const handleInput = (evt: Event) => {
  emits('search', (evt.target as HTMLInputElement).value);
};
</script>

<template>
  <label
    for="search"
    class="flex w-full max-w-full shrink-[1] items-center gap-6 rounded-radii bg-ui px-[30px] py-[17px] shadow-sh-1 md:max-w-[480px]"
  >
    <SearchOutlined class="h-5 w-5" />
    <input
      :value="value"
      id="search"
      @input="handleInput"
      :placeholder="placeholder"
      class="w-full bg-ui text-sm outline-0"
    />
  </label>
</template>
