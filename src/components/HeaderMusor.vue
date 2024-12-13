<template>
    <nav class="navbar-container">
      <div class="navbar">
        <div class="navbar__logo">
          <img src="../assets/LogoHeader.png" alt="Logo" class="logo">
          <img src="../assets/List.png" alt="All" class="menu-icon">
          <img src="../assets/Language.png" alt="Language" class="language-icon">
        </div>
        <div class="phone">+7 3435 555 55 55</div>
        <div class="navbar__links">
          <div class="icon cleaning_icon">
            <img src="../assets/Broom.png" alt="Broom">
            <p>Клининг</p>
          </div>
          <div class="icon bucket_icon">    
            <img src="../assets/Bucket.png" alt="Bucket">
            <p>Вывоз мусора</p>
          </div>
          <div class="icon company_icon">
            <img src="../assets/Companies.png" alt="Companies">
            <p>Для компании</p>
          </div>
          <div class="icon map_icon">
            <img src="../assets/Map.png" alt="Map">
            <p>Карта</p>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* Основные стили */
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
  

  @media (max-width: 768px) {
  .phone, 
  .navbar__links {
    display: none; 
  }

  .navbar {
    display: flex;
    justify-content: space-between; 
    align-items: center; 
  }

  .menu-icon {
    display: block; 
  }

  .navbar__logo {
    order: 1; 
  }

  .menu-icon {
    order: 2; 
  }
}
  </style>
  