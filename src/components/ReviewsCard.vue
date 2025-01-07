<template>
  <div class="company-info-container">
    <div class="company-info">
      <div class="left" @click="prevInfo">
        <img src="../assets/corner_left.svg" class="corner" alt="icon" />
      </div>
      <div>
        <div class="header-company-info">
          <img src="../assets/Union.svg" class="face" alt="icon" />
          <h1>{{ currentInfo.name }}</h1>
        </div>
        <p>{{ currentInfo.info }}</p>
      </div>
      <div class="right" @click="nextInfo">
        <img src="../assets/corner_right.svg" class="corner" alt="icon" />
      </div>
    </div>
  </div>
</template>
  
  <script>

export default {
  name: "CompanyInfo",
  props: {
    companyinformations: {
      type: Array,
      required: true,
      default: () => [
        {
          name: "Анна Иванова",
          info: "Трудились в поте лица целый день.. убрали даже там, где не должны были,\nно как хозяйки мимо не смогли пройти) расставили на свой взгляд мелкую бытовую технику, приспособления на кухне и наполнение холодильника..\nизвинились при этом за предложенный вариант..\nа я оставила и радуюсь, как так сама не додумалась) Успехов и процветания!",
        },
        {
          name: "Иван Петров",
          info: "Очень доволен сервисом, уборка выполнена на высшем уровне! Спасибо за внимание к деталям.",
        },
        {
          name: "Ольга Смирнова",
          info: "Рекомендую! Работают быстро, аккуратно и с улыбкой. Всем довольна.",
        },
      ],
    },
  },
  data() {
    return {
      currentIndex: 0, 
    };
  },
  computed: {
    currentInfo() {
      return this.companyinformations[this.currentIndex];
    },
  },
  methods: {
    nextInfo() {
      this.currentIndex = (this.currentIndex + 1) % this.companyinformations.length;
    },
    prevInfo() {
      this.currentIndex =
        (this.currentIndex - 1 + this.companyinformations.length) %
        this.companyinformations.length;
    },
  },
};
  </script>
<style>
.company-info-container {
  display: flex;
    justify-content: center;
    background-color: #003153;
    color: #fff;
    text-align: center;
    padding:20px;
    height: auto;
    min-height: 35vh;
}
  .left {
    display: flex;
    align-items: center;
  }
  .right {
    display: flex;
    align-items: center;
  }
  .corner {
    width: 30px;
    height: 55px;
  }
  .corner:hover {
    cursor: pointer;
  }
.company-info {
    font-size: 16px;
    display: flex;
    gap: 10px;
    width: 25%;
  }
  .company-info p{
    white-space: pre-line;
  }
  .header-company-info{
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-direction: row;
  }
  @media (max-width: 1700px) {
    .company-info{
      width: 50%;
    }
    .company-info-container{
      padding: 10px;
    }
  }
  @media (max-width: 840px) {
    .company-info h1{
      font-size: 20px;
    }
    .company-info{
      width: 75%;
    }
    .company-info-container{
      padding: 10px;
    }
  }
  @media (max-width: 480px) {
    .corner{
      width: 20px;
      height: 40px;
    }
    .face{
      width: 30px;
      height: 30px;
    }
    .company-info-container{
      padding: 10px;
    }
    .company-info h1{
      font-size: 16px;
    }
    .company-info p{
    font-size: 18px;
    }
    .header-company-info{
      width: 100%;
      gap: 10px;
    }
  }
  </style>