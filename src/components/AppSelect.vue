<script setup lang="ts">
import { ref, toRefs } from 'vue';

interface SelectProps {
  options: string[];
  value: string;
  placeholder?: string;
}

const props = withDefaults(defineProps<SelectProps>(), { placeholder: '' });
const emits = defineEmits<{ (e: 'select', value: string): void }>();
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
    class="flex min-w-[248px] cursor-pointer flex-col gap-2 md:min-w-[200px]"
    @blur="isOpen = false"
    @click="isOpen = !isOpen"
  >
    <div class="rounded-radii bg-ui py-4 pl-6 pr-3 shadow-sh-1">
      <div class="selected">
        {{ value || placeholder }}
      </div>
    </div>
    <div v-if="isOpen" class="rounded-radii bg-ui shadow-sh-2">
      <div v-for="(option, i) of options" :key="i" class="pl-6 pr-3" @click="handleSelect(option)">
        {{ option }}
      </div>
    </div>
  </div>
</template>
