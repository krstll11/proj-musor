<template>
  <div class="page-container">
    <div class="map-container">
      <h2 class="map-title">Карта обслуживания</h2>
      <div class="map-wrapper">
        <iframe class="map-frame" src="https://yandex.ru/map-widget/v1/?um=constructor%3A7f95a778f957bf710b34b53edc63a1d26856d6e9c9bf20ede750cd9772fc6323&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ServiceMap",
  };
  </script>
  
  <style scoped>
  .page-container {
    min-height: 80vh;
    
    align-items: center;
    justify-content: center;
    background-image: url('../assets/BGImage1.png');
    background-size: cover;
    padding: 20px;
  }
  .map-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 20px auto;
    max-width: 800px;
  }
  
  .map-title {
    font-size: 18px;
    font-weight: bold;
    color: #003153;
    margin-bottom: 15px;
    text-align: center;
  }
  
  .map-wrapper {
    width: 100%;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid #ddd;
  }
  
  .map-frame {
    width: 100%;
    height: 600px;
    border: none;
  }
  </style>
  