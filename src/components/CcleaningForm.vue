<template>
    <div class="container">
      <h1 class="form-title">Заявка на клининг</h1>
      <div class="form-wrapper">
     
        <div class="form-left">
          <div class="form">
            <input type="text" placeholder="Имя" class="form-input" />
            <input type="tel" placeholder="Номер телефона" class="form-input" />
            <input type="text" placeholder="Адрес" class="form-input" />
            <input type="date" class="form-input" />
            <button class="submit-button" @click="handleSubmit">Отправить</button>
          </div>
        </div>
  
       
        <div class="form-right">
          <div class="form-group-horizontal">
            <div for="house-type" class="form-label">Выберите тип здания:</div>
            <select id="house-type" class="form-select">
              <option value=""></option>
              <option value="apartment">Офис</option>
              <option value="house">Ангар</option>
            </select>
          </div>
          <div class="form-group-horizontal">
            <div for="area" class="form-label">Укажите площадь:</div>
            <input type="number" id="area" class="form-input2" placeholder="м²" />
          </div>
          <div class="form-group-horizontal">
            <div for="rooms" class="form-label">Укажите количество помещений:</div>
            <input type="number" id="rooms" class="form-input2" />
          </div>
          <div class="form-group-horizontal">
            <div for="bathrooms" class="form-label">Укажите количество санузлов:</div>
            <input type="number" id="bathrooms" class="form-input2" />
          </div>
          <div class="form-group">
            <div class="form-label">Нужна ли мойка окон:</div>
            <div class="button-group">
              <button type="button" class="option-button">Да</button>
              <button type="button" class="option-button">Нет</button>
            </div>
          </div>
          <div class="form-group">
            <div class="form-label">Где оставить мусор?</div>
            <div class="button-group">
              <button type="button" class="option-button">У входа</button>
              <button type="button" class="option-button">Вывезти</button>
            </div>
          </div>
          
        </div>
      </div>
      <MessageBox v-if="showMessageBox" @close="closeMessageBox" />
    </div>
  </template>
  
  <script>
 import MessageBox from './MessageBox.vue';
  
  export default {
    components: {
      MessageBox
    },
    data() {
      return {
        showMessageBox: false
      };
    },
    methods: {
      handleSubmit() {
        this.showMessageBox = true;
      },
      closeMessageBox() {
        this.showMessageBox = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('../assets/BGImage1.png');
    background-size: cover;
    padding: 20px;
  }
  
  .form-wrapper {
    display: flex;
    gap: 10px;
    background-color: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
    max-width: 60%;
    width: 100%;
    flex-wrap: wrap;
  }
  
  .form-title {
    text-align: center;
    font-size: 32px;
    color: #003153;
    margin-bottom: 15px;
  }
  
  .form-left {
    flex: 1 1 250px;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    gap: 4.5vh;
  }
  
  .form-input {
    padding: 8px;
    border: 1px solid rgba(0, 49, 83, 0.6);
    border-radius: 4px;
    font-size: 16px;
    
  }
  .form-input2 {
    padding: 8px;
    border: 1px solid rgba(0, 49, 83, 0.6);
    border-radius: 4px;
    font-size: 16px;
    width: 40%;
    
  }
  .form-right {
    flex: 1 1 250px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .form-group-horizontal {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .form-label {
    font-size: 18px;
    color: #333;
    text-align: left;
    flex: 1;
  }
  
  .form-select {
    padding: 8px;
    border: 1px solid rgba(0, 49, 83, 0.6);
    border-radius: 4px;
    font-size: 16px;
    width: 40%;
  }
  
  .button-group {
    display: flex;
    gap: 8px;
  }
  
  .option-button {
    flex: 1;
    padding: 8px;
    border: 1px solid rgba(0, 49, 83, 0.6);
    border-radius: 4px;
    background-color: #f9f9f9;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .option-button:hover {
    background-color: #e0e0e0;
  }
  
  .submit-button {
    padding: 8px;
    background-color: #003153;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .submit-button:hover {
    background-color: #002644;
  }
  
  @media (max-width: 768px) {
    .form-wrapper {
      flex-direction: column;
      align-items: center;
    }
  
    .form-left, .form-right {
      flex: 1 1 100%;
    }
  }
  </style>
  