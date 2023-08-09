<script setup lang="ts">
import { useRoute } from 'vue-router';
import ButtonBack from '@/components/ButtonBack.vue';
import ThePreloader from '@/components/ThePreloader.vue';
import TheError from '@/components/TheError.vue';
import TheDetails from '@/components/TheDetails.vue';
import { useDetails } from '@/hooks/useDetails';
const { code } = useRoute().params;
const { details, status, error } = useDetails(Array.isArray(code) ? code[0] : code);
</script>

<template>
  <section class="pt-[30px] md:pt-20">
    <ButtonBack />
    <TheError v-if="error" />
    <ThePreloader v-else-if="status === 'loading'" />
    <TheDetails v-else-if="details" :details="details" />
  </section>
</template>
