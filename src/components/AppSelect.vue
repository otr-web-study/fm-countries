<script setup lang="ts">
import { ref, toRefs } from 'vue';
import CloseOutlined from './icons/CloseOutlined.vue';
import ChevronDown from './icons/ChevronDown.vue';

interface SelectProps {
  options: string[];
  value: string;
  placeholder?: string;
}

const props = withDefaults(defineProps<SelectProps>(), { placeholder: '' });
const emits = defineEmits<{
  (e: 'select', value: string): void;
  (e: 'clear'): void;
}>();
const isOpen = ref(false);
const { placeholder } = toRefs(props);

const handleSelect = (option: string) => {
  emits('select', option);
  isOpen.value = false;
};
</script>

<template>
  <div
    :tabindex="0"
    class="relative flex min-w-[248px] shrink-0 cursor-pointer flex-col gap-1 self-start text-sm md:min-w-[200px] md:self-auto"
    @blur="isOpen = false"
    @click="isOpen = !isOpen"
  >
    <div class="relative z-10 rounded-radii bg-ui py-[17px] pl-6 pr-3 shadow-sh-1">
      <div class="flex items-center justify-between">
        <span>{{ value || placeholder }}</span>
        <Transition
          mode="out-in"
          enter-active-class="duration-300 ease"
          enter-from-class="opacity-0"
          enter-to-class="opacity-1"
          leave-active-class="duration-300"
          leave-from-class="opacity-1"
          leave-to-class="opacity-0"
        >
          <ChevronDown v-if="!value" class="h-4 w-4" />
          <button v-else @click.stop="emits('clear')">
            <span class="sr-only">clear</span>
            <CloseOutlined class="h-4 w-4" />
          </button>
        </Transition>
      </div>
    </div>
    <Transition
      enter-active-class="duration-300 ease"
      enter-from-class="-translate-y-[10%] opacity-0"
      enter-to-class="translate-y-0 opacity-1"
      leave-active-class="duration-300"
      leave-from-class="translate-y-0 opacity-1"
      leave-to-class="-translate-y-[10%] opacity-0"
    >
      <div
        v-if="isOpen"
        class="absolute top-[calc(100%+4px)] z-0 w-full rounded-radii bg-ui py-3 shadow-sh-1"
      >
        <div
          v-for="(option, i) of options"
          :key="i"
          class="py-[6px] pl-6 pr-3 hover:bg-input"
          @click.stop="handleSelect(option)"
        >
          {{ option }}
        </div>
      </div>
    </Transition>
  </div>
</template>
