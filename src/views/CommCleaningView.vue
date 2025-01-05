<script setup>
import CcleaningForm from '@/components/CcleaningForm.vue';
import { ref } from "vue";
import PriceCards from '@/components/PriceCards.vue';
import ReviewsCard from '@/components/ReviewsCard.vue';
const cleaningTitles = ref([
  { title: "Выберите тип здания чтобы увидеть цены." },
]);
const cleaningOptions = ref([
  { name: "500м²", price: 6000 },
  { name: "1000м²", price: 7000  },
  { name: "3000м²", price: 12000 },
]);
const companyinformations = ref([
{ name: "Владелец склада", info: "Уборка склада была выполнена на высоком уровне. Специалисты компании оперативно и качественно справились со всеми задачами. Особое внимание было уделено труднодоступным местам и сложным загрязнениям. Весь процесс прошел без лишних задержек и строго в установленные сроки. Результат превзошел наши ожидания – склад стал чистым и готовым к дальнейшей работе. Благодарим за профессионализм и будем рады сотрудничать в будущем!"  },
])
</script>
<template>
    <CcleaningForm></CcleaningForm>
    <PriceCards :cleaningTitles="cleaningTitles" :cleaningOptions="cleaningOptions"></PriceCards>
<ReviewsCard :companyinformations="companyinformations" ></ReviewsCard>
</template>