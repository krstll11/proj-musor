<script>
export default {
  name: "CleaningPrices",
  data() {
    return {
      selectedTitleIndex: 0, 
    };
  },
  computed: {
    cleaningOptions() {
      return this.cleaningOptionsSets[this.selectedTitleIndex] || [];
    },
  },
  mounted() {
    
    this.$refs.buttons[0].focus();
  },
  props: {
    cleaningTitles: {
      type: Array,
      required: true,
    },
    buttonTitles: {
      type: Array,
      required: true,
    },
    cleaningOptionsSets: {
      type: Array,
      required: true,
    },
  },
  methods: {
    setOptions(index) {
      this.selectedTitleIndex = index;
    },
  },
};
</script>

<template>
  <div class="prices">
    <h2>Сколько это стоит</h2>
    <p>{{ cleaningTitles[0]?.title }}</p>
    <div class="buttons">
      <button 
        v-for="(button, index) in buttonTitles" 
        :key="index" ref="buttons" 
        @click="setOptions(index)">
        {{ button }}
        
      </button>
    </div>
    
    <div class="price-cards">
      <div class="price-card" v-for="(element, idx) in cleaningOptions" :key="idx">
        <h3>{{ element.name }}</h3>
        <p>{{ element.price }} RUB</p>
        <button>Заказать</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.prices {
  padding: 40px 20px;
  text-align: center;
  background-color: #f9f9f9;
}

.prices h2 {
  font-size: 28px;
  
  color: #003153;
}

.buttons {
  display: flex;
  justify-content: center;
  
  margin-bottom: 20px;
}
.buttons button:last-child {
  border-radius: 0 10px 10px 0;
}
.buttons button:first-child {
  border-radius: 10px 0 0 10px;
}
.buttons button {
  width: 15%;
  padding: 10px 15px;
  font-size: 16px;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #003153;
  
  cursor: pointer;
}
.buttons button:focus{
  background-color: #003153;
  color:#fff
}
.buttons button:hover {
  background-color: #ff7514;
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
  .buttons {
    flex-wrap: wrap;

  }

  .buttons button {
    width: 30%; 
    font-size: 14px; 
    padding: 8px 12px; 
  }
}
</style>
