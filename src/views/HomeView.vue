<template>
  <div class="cleaning-page">
    <div class="main">
      <h1>Закажите клининг уже сейчас</h1>
      <p>После заполнения небольшой заявки мы перезвоним вам и уточним все детали</p>
      <button class="main-btn">Заполнить</button>
    </div>
    <PriceCards :cleaningTitles="cleaningTitles" :cleaningOptions="cleaningOptions"></PriceCards>
    <ReviewsCard :companyinformations="companyinformations" ></ReviewsCard>
  </div>

</template>

<script setup>
import { ref } from "vue";
import PriceCards from "@/components/PriceCards.vue";
import ReviewsCard from "@/components/ReviewsCard.vue";

const cleaningTitles = ref([
  { title: "Выберите периодичность уборки, чтобы узнать цены:" },
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

<style scoped>
.cleaning-page {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.main {
  background-image: url('../assets/BGImage.png'); 
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #003153;
}

.main h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.main p {
  font-size: 18px;
  margin-bottom: 20px;
  padding: 0px 10px;
}

.main-btn {
  height: 104px;
  width: 360px;
  padding: 10px 20px;
  font-size: 24px;
  background-color: #003153;
  color: #fff;
  border: none;
  border-radius: 13px;
  cursor: pointer;
}

.main-btn:hover {
  background-color: #ff7514;
}


@media (max-width: 768px) {
  .main h1 {
    font-size: 2rem;
  }

  .main p {
    font-size: 1rem;
  }

  .main-btn {
    padding: 10px 20px;
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .main h1 {
    font-size: 1.5rem;
  }

  .main p {
    font-size: 0.9rem;
  }

  .main-btn {
  height: 70px;
  width: 280px;
  padding: 10px 20px;
  font-size: 18px;
  }
}
</style>