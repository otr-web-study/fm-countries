<script setup lang="ts">
import ButtonBack from '@/components/ButtonBack.vue';
import ThePreloader from '@/components/ThePreloader.vue';
import TheError from '@/components/TheError.vue';
import TheDetails from '@/components/TheDetails.vue';
import { useDetails } from '@/hooks/useDetails';

const { details, status, error } = useDetails();
</script>

<template>
  <section class="pt-[30px] md:pt-20">
    <ButtonBack />
    <TheError v-if="error" />
    <ThePreloader v-else-if="status === 'loading'" />
    <TheDetails v-else-if="details" :details="details" />
  </section>
</template>
