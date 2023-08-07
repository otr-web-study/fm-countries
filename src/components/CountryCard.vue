<script setup lang="ts">
import CountryInfoItem from './CountryInfoItem.vue';
import type { Country } from '@/types';
defineProps<{ country: Country }>();

type InfoItemsProps = 'population' | 'region' | 'capital';

const infoItemsProps: InfoItemsProps[] = ['population', 'region', 'capital'];
</script>

<template>
  <article
    class="h-full overflow-hidden rounded-radii bg-ui shadow-sh-1 transition-transform duration-300 hover:-translate-y-[2px] hover:translate-x-[2px] hover:shadow-sh-2"
  >
    <RouterLink
      :to="{ name: 'details', params: { code: country.cca2 } }"
      class="flex h-full flex-col"
    >
      <img
        :src="country.flags.svg"
        :alt="country.flags.alt"
        class="aspect-[5/3] w-full object-cover object-center shadow-sh-2"
      />
      <div
        class="flex flex-grow flex-col px-[clamp(24px,9%,30px)] pb-[clamp(45px,17%,56px)] pt-[clamp(27px,10%,32px)] [container-type:inline-size]"
      >
        <h2
          class="flex flex-grow flex-col text-[clamp(18px,7.6cqw,24px)] font-extrabold capitalize"
        >
          {{ country.name }}
        </h2>
        <ul class="mt-[clamp(19px,7.2%,23px)] flex flex-col gap-[2px]">
          <li v-for="propName in infoItemsProps" :key="propName">
            <CountryInfoItem
              :name="propName"
              :value="country[propName]"
              class="text-[clamp(14px,7.2cqw,16px)]"
            />
          </li>
        </ul>
      </div>
    </RouterLink>
  </article>
</template>
