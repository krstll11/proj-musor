<template>
    <nav class="navbar-container">
      <div class="navbar">
        <div class="navbar__logo">
          <router-link :to="`/`">
          <img src="../assets/LogoHeader.png" alt="Logo" class="logo">
          </router-link>
          <img
          src="../assets/List.png"
          alt="Menu"
          class="menu-icon"
          @click="toggleMenu"/>
          <img src="../assets/Language.png" alt="Language" class="language-icon">
        </div>
        <div class="phone">+7 3435 555 55 55</div>
        <div class="navbar__links">
          <div class="icon cleaning_icon">
            <router-link :to="`/cleaning`">
            <img src="../assets/Broom.png" alt="Broom">
            <p>Клининг</p>
          </router-link>
          </div>
          <div class="icon bucket_icon">   
            <router-link :to="`/musor`">
            <img src="../assets/Bucket.png" alt="Bucket">
            <p>Вывоз мусора</p>
          </router-link>
          </div>
          <div class="icon company_icon">
            <router-link :to="`/ccleaning`">
            <img src="../assets/Companies.png" alt="Companies">
            <p>Для компании</p>
            </router-link>
          </div>
          <div class="icon map_icon">
            <router-link :to="`/map`">
            <img src="../assets/Map.png" alt="Map">
            <p>Карта</p>
            </router-link>
          </div>
        </div>
        <div v-if="isMenuVisible" class="dropdown-menu">
        <router-link :to="`/cleaning`">Клининг</router-link>
        <router-link :to="`/musor`">Вывоз мусора</router-link>
        <router-link :to="`/ccleaning`">Для компании</router-link>
        <router-link :to="`/map`">Карта</router-link>
      </div>
      </div>
    </nav>
  </template>
  
  <script setup>
import router from '@/router';
import { ref } from "vue";

const isMenuVisible = ref(false);

function toggleMenu() {
  isMenuVisible.value = !isMenuVisible.value;
}
  </script>
  
  <style scoped>
 
  .navbar-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    height: 111px;
    background-color: #ff7514;
    padding: 0 20px;
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    width: 100%;
  }
  
  .navbar__logo {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  .navbar__links {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 25px;
  }
  
  .phone {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    background-color: #003153;
    padding: 10px 15px;
    border-radius: 50px;
    font-size: 16px;
    font-weight: bold;
  }
  
  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;
  }
  
  .icon img {
    width: 48px;
    height: 48px;
  }
  
  .icon p {
    margin: 0;
    font-size: 14px;
    color: #003153; 
    font-weight: 500;
    white-space: nowrap;
  }
  
  
  .logo {
    width: 120px;
    height: auto;
  }
  
  .menu-icon,
  .language-icon {
    width: 30px;
    height: 30px;
  }

  .dropdown-menu {
  position: absolute;
  top: 64%;
  right: 68%;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.dropdown-menu a {
  text-decoration: none;
  color: #003153;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.dropdown-menu a:hover {
  background-color: #f0f0f0;
}

  @media (max-width: 805px) {
    .phone {
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
  .phone, 
  .navbar__links {
    display: none; 
  }

  .navbar {
    display: flex;
    justify-content: center; 
  }

  .menu-icon {
    display: block; 
  }

  .navbar__logo {
    order: 1; 
    display: flex;
  }

  .menu-icon {
    order: 2; 
  }
}
@media (max-width: 480px) {
  .dropdown-menu {
  position: absolute;
  top: 68%;
  right: 11%;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
}
  </style>
  