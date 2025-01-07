<script setup>
import CcleaningForm from '@/components/CcleaningForm.vue';
import { ref } from "vue";
import PriceCards from '@/components/PriceCards.vue';
import ReviewsCard from '@/components/ReviewsCard.vue';
const buttonTitles = ["Склад", "Офис", "Ангар"];
const cleaningTitles = ref([
  { title: "Выберите тип здания чтобы увидеть цены." },
]);
const cleaningOptionsSets = ref( [
        [
          { name: "500м²", price: 8000 },
          { name: "1000м²", price: 9000 },
          { name: "3000м²", price: 12000 },
        ],
        [
        { name: "500м²", price: 10000 },
          { name: "1000м²", price: 11000 },
          { name: "3000м²", price: 15000 },
        ],
        [
        { name: "500м²", price: 6500 },
          { name: "1000м²", price: 7000 },
          { name: "3000м²", price: 11000 },
        ],
      ],
    );
const companyinformations = ref([
{ name: "Владелец склада", info: "Уборка склада была выполнена на высоком уровне. Специалисты компании оперативно и качественно справились со всеми задачами. Особое внимание было уделено труднодоступным местам и сложным загрязнениям. Весь процесс прошел без лишних задержек и строго в установленные сроки. Результат превзошел наши ожидания – склад стал чистым и готовым к дальнейшей работе. Благодарим за профессионализм и будем рады сотрудничать в будущем!"  },
{name:"Владелец офиса", info:"Уборка офиса проводена в лучшем виде! Все делано профессионально и классно спасибо три раза спасибо!"},
{name:"Менеджер торгового центра", info:"Уборка торгового центра была выполнена на высшем уровне. Команда профессионалов оперативно справилась с поставленными задачами, уделяя особое внимание зонам с высокой проходимостью и труднодоступным участкам. Все работы были завершены строго в согласованные сроки, а качество уборки превзошло наши ожидания. Полы сияют, витрины безупречно чисты, а воздух свежий. Благодарим за внимание к деталям и высокий уровень сервиса. Планируем продолжить сотрудничество на постоянной основе!"}
])
</script>
<template>
    <CcleaningForm></CcleaningForm>
    <PriceCards :cleaningTitles="cleaningTitles" :buttonTitles="buttonTitles":cleaningOptionsSets="cleaningOptionsSets"></PriceCards>
<ReviewsCard :companyinformations="companyinformations" ></ReviewsCard>
</template>