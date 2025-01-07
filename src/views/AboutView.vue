<script setup>
import { ref } from "vue";
import PriceCards from '@/components/PriceCards.vue';
import ReviewsCard from '@/components/ReviewsCard.vue';
import WasteForm from '@/components/WasteForm.vue';
const buttonTitles = ["ТБО", "Строительный мусор", "Смешанный"];
const cleaningTitles = ref([
  { title: "Выберите тип мусора и сможете узнать средние цены." },
]);
const cleaningOptionsSets = ref([
        [
        { name: "Малый", price: 2000 },
  { name: "Средний", price: 3000 },
  { name: "Большой", price: 4500 },
        ],
        [
        { name: "Малый", price: 3000 },
  { name: "Средний", price: 4000 },
  { name: "Большой", price: 6500 },
        ],
        [
        { name: "Малый", price: 2800 },
  { name: "Средний", price: 3300 },
  { name: "Большой", price: 5000 },
        ],
      ]);
const companyinformations = ref([
{ name: "Иван Иванов", info: "Хочу выразить благодарность за качественную работу! Вывоз мусора был организован быстро и без лишних хлопот. Я заказал услугу через сайт, и уже на следующий день бригада приехала точно в оговоренное время. Все было сделано аккуратно и профессионально – мусор вывезли полностью, никаких остатков после себя не оставили. Особенно порадовала вежливость сотрудников и их готовность помочь с любыми вопросами. Рекомендую эту компанию всем, кто ищет надежный и оперативный сервис!"  },
{ name: "Дмитрий Петров", info: "Все прошло без проблем. Сотрудники были вежливы, оперативные. Спасибо за работу!"  },
{ name: "Ольга Смирнова", info: "Рекомендую! Работают быстро, аккуратно и с улыбкой. Всем довольна."  },
])
</script>

<template>
<WasteForm></WasteForm>
<PriceCards :cleaningTitles="cleaningTitles" :buttonTitles="buttonTitles":cleaningOptionsSets="cleaningOptionsSets"></PriceCards>
<ReviewsCard :companyinformations="companyinformations" ></ReviewsCard>
</template>

<style>

</style>
