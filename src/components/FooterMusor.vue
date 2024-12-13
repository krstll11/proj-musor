<template>
    <div class="footer-container">
    <div class="footer_info">
        <img src="../assets/Street.png" alt="Street">
        <img src="../assets/Email.png" alt="Email">
        <img src="../assets/Phone.png" alt="Phone">
    </div>
    <div class="footer_text">
        <p>Компания "Мусорка" находится по адресу: Бассейная улица, дом 29, Нижний Тагил. 
        Прием заказов осуществляется круглосуточно.</p>
    </div>
</div>
</template>
<style scoped>
.footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position:static;
    bottom: 0;
    height: 111px;
    background-color: #3D3D3D;
    
}
.footer_text{
    color: #909090;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
}
@media (max-width: 768px)
{
    .footer_info{
        display: flex;
        flex-direction: column;
    }
    .footer_text{
        display: none;
    }
}
</style>