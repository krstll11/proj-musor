<script setup>
import CleaningForm from '@/components/CleaningForm.vue';
import { ref } from "vue";
import PriceCards from '@/components/PriceCards.vue';
import ReviewsCard from '@/components/ReviewsCard.vue';
const cleaningTitles = ref([
  { title: "Выберите периодичность уборки чтобы увидеть цены." },
]);
const cleaningOptions = ref([
  { name: "Однокомнатная", price: 1000 },
  { name: "Двухкомнатная", price: 1600 },
  { name: "Трехкомнатная", price: 2400 },
]);
const companyinformations = ref([
{ name: "Анна Иванова", info: "Трудились в поте лица целый день.. убрали даже там, где не должны были, но как хозяйки мимо не смогли пройти) расставили на свой вгляд мелкую бытовую технику, приспособления на кухне и наполнение холодильника.. извинились при этом за предложенный вариант.. а я оставила и радуюсь, как так сама не додумалась) Успехов и процветания!"  },
])
</script>
<template>
    <CleaningForm></CleaningForm>
    <PriceCards :cleaningTitles="cleaningTitles" :cleaningOptions="cleaningOptions"></PriceCards>
<ReviewsCard :companyinformations="companyinformations" ></ReviewsCard>
</template>