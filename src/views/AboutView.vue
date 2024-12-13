<script setup>
import { ref } from "vue";
import PriceCards from '@/components/PriceCards.vue';
import ReviewsCard from '@/components/ReviewsCard.vue';
import WasteForm from '@/components/WasteForm.vue';
const cleaningTitles = ref([
  { title: "Выберите тип мусора и сможете узнать средние цены." },
]);
const cleaningOptions = ref([
  { name: "Малый", price: 2000 },
  { name: "Средний", price: 3000 },
  { name: "Большой", price: 4500 },
]);
const companyinformations = ref([
{ name: "Иван Иванов", info: "Хочу выразить благодарность за качественную работу! Вывоз мусора был организован быстро и без лишних хлопот. Я заказал услугу через сайт, и уже на следующий день бригада приехала точно в оговоренное время. Все было сделано аккуратно и профессионально – мусор вывезли полностью, никаких остатков после себя не оставили. Особенно порадовала вежливость сотрудников и их готовность помочь с любыми вопросами. Рекомендую эту компанию всем, кто ищет надежный и оперативный сервис!"  },
])
</script>

<template>
<WasteForm></WasteForm>
<PriceCards :cleaningTitles="cleaningTitles" :cleaningOptions="cleaningOptions"></PriceCards>
<ReviewsCard :companyinformations="companyinformations" ></ReviewsCard>
</template>

<style>

</style>
