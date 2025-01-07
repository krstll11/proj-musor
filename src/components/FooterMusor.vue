<template>
    <div class="footer-container">
    <div class="footer_info">
        <a href="https://yandex.ru/maps/?um=constructor%3Ace40098d28f870a26ae818604e02007ebd90a433a356c611ab1f74172c76e4e4&source=constructorLink" target="_blank"><img src="../assets/street.svg" alt="Street"></a>
        <img src="../assets/mail.svg" alt="Email">
        <img src="../assets/phone.svg" alt="Phone">
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
.footer_info{
    cursor: pointer;
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