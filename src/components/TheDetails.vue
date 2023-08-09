<script setup lang="ts">
import CountryInfoItem from '@/components/CountryInfoItem.vue';
import TheBorder from '@/components/TheBorder.vue';
import { formatVal } from '@/utils/utils';
import type { CountryDetails } from '@/types';

defineProps<{ details: CountryDetails }>();
</script>

<template>
  <div
    class="grid grid-cols-1 items-center justify-center gap-[70px] py-[70px] lg:grid-cols-2 lg:gap-[clamp(30px,11.8%,150px)] lg:pt-20"
  >
    <img
      :src="details.flags.svg"
      :alt="details.flags.alt"
      class="aspect-[5/3.5] w-full object-cover object-center"
    />
    <div>
      <h2 class="text-[32px] font-extrabold leading-9">{{ details.name }}</h2>
      <div
        class="mt-[60px] flex flex-col gap-[60px] md:mt-[33px] md:flex-row md:gap-[clamp(20px,22%,120px)]"
      >
        <ul class="flex flex-col gap-2">
          <li>
            <CountryInfoItem
              name="Native Name"
              :value="details.nativeName"
              class="text-sm md:text-base"
            />
          </li>
          <li>
            <CountryInfoItem
              name="Population"
              :value="formatVal(details.population)"
              class="text-sm md:text-base"
            />
          </li>
          <li>
            <CountryInfoItem
              name="Region"
              :value="formatVal(details.region)"
              class="text-sm md:text-base"
            />
          </li>
          <li>
            <CountryInfoItem
              name="Sub Region"
              :value="formatVal(details.subregion)"
              class="text-sm md:text-base"
            />
          </li>
          <li>
            <CountryInfoItem
              name="Capital"
              :value="formatVal(details.capital)"
              class="text-sm md:text-base"
            />
          </li>
        </ul>
        <ul class="flex flex-col gap-2">
          <li>
            <CountryInfoItem
              name="Top Level Domain"
              :value="details.tld"
              class="text-sm md:text-base"
            />
          </li>
          <li>
            <CountryInfoItem
              name="Currencies"
              :value="details.currencies.join(', ')"
              class="text-sm md:text-base"
            />
          </li>
          <li>
            <CountryInfoItem
              name="Languages"
              :value="details.languages.join(', ')"
              class="text-sm md:text-base"
            />
          </li>
        </ul>
      </div>
      <div
        class="mt-[60px] flex flex-col gap-[13px] md:mt-20 md:flex-row md:items-center md:gap-[18px]"
      >
        <p class="text-sm font-semibold md:text-base">Border Countries:</p>
        <ul class="flex flex-wrap gap-[13px] md:gap-[18px]">
          <li v-for="cc in details.borders" :key="cc">
            <TheBorder :code="cc" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
