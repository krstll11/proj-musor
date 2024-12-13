<template>
    <div class="company-info">
      <div v-for="(info, index) in companyinformations" :key="index">
        <h1>{{ info.name }}</h1>
        <p>{{ info.info }}</p>
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
            info: "Трудились в поте лица целый день.. убрали даже там, где не должны были, но как хозяйки мимо не смогли пройти) расставили на свой вгляд мелкую бытовую технику, приспособления на кухне и наполнение холодильника.. извинились при этом за предложенный вариант.. а я оставила и радуюсь, как так сама не додумалась) Успехов и процветания!",
          },
        ],
      },
    },
  };
  </script>
<style>
.company-info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #003153;
    color: #fff;
    text-align: center;
    padding: 20px;
    font-size: 14px;
  }
  
  .company-info p {
    display: flex;
    margin: 0;
    margin-bottom: 10px;
    
  }</style>