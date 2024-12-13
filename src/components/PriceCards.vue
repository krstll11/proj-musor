<template>
    <div class="prices" v-for="(title, index) in cleaningTitles" :key="index">
      <h2>Сколько это стоит</h2>
        <p>{{ title.title }}</p>
        <div class="price-cards">
          <div class="price-card" v-for="(element, idx) in cleaningOptions" :key="idx">
            <h3>{{ element.name }}</h3>
            <p>{{ element.price }} RUB</p>
            <button>Заказать</button>
          </div>
        </div>
      </div>
  </template>
  
  <script>
  export default {
    name: "CleaningPrices",
    props: {
      cleaningTitles: {
        type: Array,
        required: true,
        default: () => [
          { title: "Выберите периодичность уборки, чтобы узнать цены:" },
        ],
      },
      cleaningOptions: {
        type: Array,
        required: true,
        default: () => [
          { name: "Однокомнатная", price: 1000 },
          { name: "Двухкомнатная", price: 1600 },
          { name: "Трехкомнатная", price: 2400 },
        ],
      },
    },
  };
  </script>
<style scoped>
.prices {
  padding: 40px 20px;
  text-align: center;
  background-color: #f9f9f9;
}

.prices h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #003153;
}

.prices p {
  color: #003153;
  font-size: 16px;
  margin-bottom: 20px;
}

.price-cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.price-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  width: 250px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.price-card h3 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #ff7514;
}

.price-card p {
  font-size: 16px;
  margin-bottom: 20px;
}

.price-card button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #003153;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.price-card button:hover {
  background-color: #ff7514;
}
@media (max-width: 768px) {
  .prices h2 {
    font-size: 1.5rem;
  }

  .price-card h3 {
    font-size: 1.2rem;
  }

  .price-card p {
    font-size: 1rem;
  }

  .price-card button {
    font-size: 0.9rem;
  }
}
</style>