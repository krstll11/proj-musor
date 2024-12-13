<template>
    <div class="waste-removal-form">
      <h2>Заявка на вывоз мусора</h2>
      <div class="form-container">
        <!-- Левая часть формы -->
        <div class="form-left">
          <input type="text" placeholder="Имя" v-model="formData.name" />
          <input type="text" placeholder="Номер телефона" v-model="formData.phone" />
          <input type="text" placeholder="Адрес" v-model="formData.address" />
          <input type="date" v-model="formData.date" />
        </div>
        
        <!-- Правая часть формы -->
        <div class="form-right">
          <label for="waste-type">Выберите тип мусора</label>
          <select id="waste-type" v-model="formData.wasteType">
            <option value="organic">Органический</option>
            <option value="plastic">Пластик</option>
            <option value="metal">Металл</option>
            <option value="other">Другое</option>
          </select>
          
          <p>Выберите тип контейнера</p>
          <div class="container-options">
            <button :class="{ active: formData.containerSize === 'small' }" @click="formData.containerSize = 'small'">Малый</button>
            <button :class="{ active: formData.containerSize === 'medium' }" @click="formData.containerSize = 'medium'">Средний</button>
            <button :class="{ active: formData.containerSize === 'large' }" @click="formData.containerSize = 'large'">Большой</button>
          </div>
          <button class="submit-btn" @click="submitForm">Отправить</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    name: "WasteRemovalForm",
    setup() {
      const formData = ref({
        name: "",
        phone: "",
        address: "",
        date: "",
        wasteType: "organic",
        containerSize: "small",
      });
  
      const submitForm = () => {
        console.log("Отправлено:", formData.value);
        alert("Форма отправлена!");
      };
  
      return {
        formData,
        submitForm,
      };
    },
  };
  </script>
  
  <style scoped>
  .waste-removal-form {
    width: 600px;
    margin: 0 auto;
    text-align: center;
    font-family: Arial, sans-serif;
    background-image: url('../assets/BGImage1.png');
    border-radius: 13px;
    padding: 20px;
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .form-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    background-color: rgba(0, 49, 83, 0.6);
    padding: 20px;
    border-radius: 13px;
  }
  
  .form-left input,
  .form-right select {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 13px;
  }
  
  .container-options {
    display: flex;
    justify-content: space-around;
    margin: 10px 0;
  }
  
  .container-options button {
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 13px;
    background-color: #fff;
    cursor: pointer;
  }
  
  .container-options button.active {
    background-color: #003153;
    color: white;
    border-color: rgba(0, 49, 83, 0.6);
  }
  
  .submit-btn {
    padding: 10px 20px;
    background-color: #003153;
    color: white;
    border: none;
    border-radius: 13px;
    cursor: pointer;
  }
  
  .submit-btn:hover {
    background-color: #0056b3;
  }
  </style>
  