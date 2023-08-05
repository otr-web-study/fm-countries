<script setup lang="ts">
import { useRouter } from 'vue-router';
import AppButton from '@/components/AppButton.vue';
import ArrowBack from '@/components/icons/ArrowBack.vue';

const router = useRouter();
</script>

<template>
  <AppButton @click="router.go(-1)">
    <ArrowBack class="h-4 w-4" />
    Back
  </AppButton>
</template>
