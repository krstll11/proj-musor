<script setup>
import CleaningForm from '@/components/CleaningForm.vue';
import { ref } from "vue";
import PriceCards from '@/components/PriceCards.vue';
import ReviewsCard from '@/components/ReviewsCard.vue';
const buttonTitles = ["Раз в неделю", "Два раза в неделю", "Одноразовая уборка"];
const cleaningTitles = ref([
  { title: "Выберите периодичность уборки чтобы увидеть цены." },
]);
const cleaningOptionsSets = ref([
        [
          { name: "Однокомнатная", price: 1000 },
          { name: "Двухкомнатная", price: 1600 },
          { name: "Трехкомнатная", price: 2400 },
        ],
        [
        { name: "Однокомнатная", price: 1800 },
          { name: "Двухкомнатная", price: 2600 },
          { name: "Трехкомнатная", price: 3200 },
        ],
        [
        { name: "Однокомнатная", price: 1300 },
          { name: "Двухкомнатная", price: 1800 },
          { name: "Трехкомнатная", price: 2700 },
        ],
      ],);
const companyinformations = ref([
{ name: "Анна Иванова", info: "Трудились в поте лица целый день.. убрали даже там, где не должны были, но как хозяйки мимо не смогли пройти) расставили на свой вгляд мелкую бытовую технику, приспособления на кухне и наполнение холодильника.. извинились при этом за предложенный вариант.. а я оставила и радуюсь, как так сама не додумалась) Успехов и процветания!"  },
        {
          name: "Иван Петров",
          info: "Очень доволен сервисом, уборка выполнена на высшем уровне! Спасибо за внимание к деталям.",
        },
        {
          name: "Ольга Смирнова",
          info: "Рекомендую! Работают быстро, аккуратно и с улыбкой. Всем довольна.",
        },
])
</script>
<template>
    <CleaningForm></CleaningForm>
    <PriceCards :cleaningTitles="cleaningTitles" :buttonTitles="buttonTitles":cleaningOptionsSets="cleaningOptionsSets"></PriceCards>
<ReviewsCard :companyinformations="companyinformations" ></ReviewsCard>
</template>