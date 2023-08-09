<script setup lang="ts">
import SearchOutlined from '@/components/icons/SearchOutlined.vue';
import CloseOutlined from './icons/CloseOutlined.vue';

interface SearchProps {
  value: string;
  placeholder?: string;
}

defineProps<SearchProps>();
const emits = defineEmits<{ (e: 'search', value: string): void }>();

const handleInput = (evt: Event) => {
  emits('search', (evt.target as HTMLInputElement).value);
};

const handleClear = () => {
  emits('search', '');
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
      autocomplete="off"
      class="flex-grow bg-ui text-sm outline-none"
    />
    <Transition
      enter-active-class="duration-300 ease"
      enter-from-class="opacity-0"
      enter-to-class="opacity-1"
      leave-active-class="duration-300"
      leave-from-class="opacity-1"
      leave-to-class="opacity-0"
    >
      <button v-if="value" @click="handleClear">
        <span class="sr-only">clear</span>
        <CloseOutlined class="h-4 w-4" />
      </button>
    </Transition>
  </label>
</template>
