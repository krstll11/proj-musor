<template>
  <div class="container">
    <h1 class="form-title">Заявка на вывоз мусора</h1>
    <div class="form-wrapper">
      <div class="form-left">
        <form class="form">
          <input type="text" placeholder="Имя" class="form-input" />
          <input type="tel" placeholder="Номер телефона" class="form-input" />
          <input type="text" placeholder="Адрес" class="form-input" />
          <input type="date" class="form-input" />
        </form>
      </div>

      <div class="form-right">
        <div class="form-group">
          <label for="trash-type" class="form-label">Выберите тип мусора</label>
          <select id="trash-type" class="form-select">
            <option value="">Тип мусора</option>
            <option value="organic">Органический</option>
            <option value="plastic">Пластик</option>
            <option value="metal">Металл</option>
          </select>
        </div>
        <div class="form-group">
          <span class="form-label">Выберите тип контейнера</span>
          <div class="button-group">
            <button class="container-button">Малый</button>
            <button class="container-button">Средний</button>
            <button class="container-button">Большой</button>
          </div>
        </div>
        <button class="submit-button" type="button" @click="handleSubmit">Отправить</button>
      </div>
    </div>
    <MessageBox v-if="showMessageBox" @close="closeMessageBox" />
  </div>
</template>

<script>
import MessageBox from './MessageBox.vue';
export default {
  name: "TrashForm",
  components: {
    MessageBox,
  },
  data() {
    return {
      showMessageBox: false,
    };
  },
  methods: {
    handleSubmit() {
      this.showMessageBox = true;
    },
    closeMessageBox() {
      this.showMessageBox = false;
    },
  },
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
    background-repeat: no-repeat;
    padding: 10px;
  }
  
 
  .form-wrapper {
    display: flex;
    gap: 20px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    width: 100%;
    flex-wrap: wrap;
  }
  

  .form-title {
    text-align: center;
    font-size: 32px;
    color: #003153;
    margin-bottom: 20px;
  }
  
  .form-left {
    flex: 1 1 300px;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .form-input {
    padding: 10px;
    border: 1px solid rgba(0, 49, 83, 0.6);
    border-radius: 5px;
    font-size: 16px;
  }
  
  .form-right {
    flex: 1 1 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
 
  .form-label {
    font-size: 18px;
    color: #333;
  }
  
  .form-select {
    padding: 10px;
    border: 1px solid rgba(0, 49, 83, 0.6);
    border-radius: 5px;
    font-size: 16px;
  }
  
  .button-group {
    display: flex;
    gap: 10px;
  }
  
  .container-button {
    flex: 1;
    padding: 10px;
    border: 1px solid rgba(0, 49, 83, 0.6);
    border-radius: 5px;
    background-color: #f9f9f9;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .container-button:hover {
    background-color: #e0e0e0;
  }
  .container-button:focus {
    background-color: #003153;
  color:#fff
  }
  .submit-button {
    padding: 10px;
    background-color: #003153;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .submit-button:hover {
    background-color: #002644;
  }
  @media (max-width: 1110px) {
    .form-wrapper {
      align-items: center;
      width: 50%;
    }
  
    .form-left, .form-right {
      flex: 1 1 100%;
    }
  }

  @media (max-width: 768px) {
    .form-wrapper {
      align-items: center;
      width: 75%;
    }
  
    .form-left, .form-right {
      flex: 1 1 100%;
    }
  }
  @media (max-width: 480px) {
    .form-wrapper {
      align-items: center;
      width: 75%;
    }
  
    .form-left, .form-right {
      flex: 1 1 100%;
    }
  }
  </style>