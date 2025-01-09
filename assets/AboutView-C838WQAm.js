import{_ as v,r as f,o as c,c as m,a as e,b as p,d as b,e as g,f as o,g as n,P as _,R as h,F as x}from"./index-BU2VNfbw.js";import{M as B}from"./MessageBox-DYMh7Z4k.js";const y={name:"TrashForm",components:{MessageBox:B},data(){return{showMessageBox:!1}},methods:{handleSubmit(){this.showMessageBox=!0},closeMessageBox(){this.showMessageBox=!1}}},M={class:"container"},w={class:"form-wrapper"},C={class:"form-right"};function S(d,a,i,l,s,t){const r=f("MessageBox");return c(),m("div",M,[a[3]||(a[3]=e("h1",{class:"form-title"},"Заявка на вывоз мусора",-1)),e("div",w,[a[2]||(a[2]=p('<div class="form-left" data-v-c3a74c96><form class="form" data-v-c3a74c96><input type="text" placeholder="Имя" class="form-input" data-v-c3a74c96><input type="tel" placeholder="Номер телефона" class="form-input" data-v-c3a74c96><input type="text" placeholder="Адрес" class="form-input" data-v-c3a74c96><input type="date" class="form-input" data-v-c3a74c96></form></div>',1)),e("div",C,[a[1]||(a[1]=p('<div class="form-group" data-v-c3a74c96><label for="trash-type" class="form-label" data-v-c3a74c96>Выберите тип мусора</label><select id="trash-type" class="form-select" data-v-c3a74c96><option value="" data-v-c3a74c96>Тип мусора</option><option value="organic" data-v-c3a74c96>Органический</option><option value="plastic" data-v-c3a74c96>Пластик</option><option value="metal" data-v-c3a74c96>Металл</option></select></div><div class="form-group" data-v-c3a74c96><span class="form-label" data-v-c3a74c96>Выберите тип контейнера</span><div class="button-group" data-v-c3a74c96><button class="container-button" data-v-c3a74c96>Малый</button><button class="container-button" data-v-c3a74c96>Средний</button><button class="container-button" data-v-c3a74c96>Большой</button></div></div>',2)),e("button",{class:"submit-button",type:"button",onClick:a[0]||(a[0]=(...u)=>t.handleSubmit&&t.handleSubmit(...u))},"Отправить")])]),s.showMessageBox?(c(),b(r,{key:0,onClose:t.closeMessageBox},null,8,["onClose"])):g("",!0)])}const T=v(y,[["render",S],["__scopeId","data-v-c3a74c96"]]),F={__name:"AboutView",setup(d){const a=["ТБО","Строительный мусор","Смешанный"],i=o([{title:"Выберите тип мусора и сможете узнать средние цены."}]),l=o([[{name:"Малый",price:2e3},{name:"Средний",price:3e3},{name:"Большой",price:4500}],[{name:"Малый",price:3e3},{name:"Средний",price:4e3},{name:"Большой",price:6500}],[{name:"Малый",price:2800},{name:"Средний",price:3300},{name:"Большой",price:5e3}]]),s=o([{name:"Иван Иванов",info:"Хочу выразить благодарность за качественную работу! Вывоз мусора был организован быстро и без лишних хлопот. Я заказал услугу через сайт, и уже на следующий день бригада приехала точно в оговоренное время. Все было сделано аккуратно и профессионально – мусор вывезли полностью, никаких остатков после себя не оставили. Особенно порадовала вежливость сотрудников и их готовность помочь с любыми вопросами. Рекомендую эту компанию всем, кто ищет надежный и оперативный сервис!"},{name:"Дмитрий Петров",info:"Все прошло без проблем. Сотрудники были вежливы, оперативные. Спасибо за работу!"},{name:"Ольга Смирнова",info:"Рекомендую! Работают быстро, аккуратно и с улыбкой. Всем довольна."}]);return(t,r)=>(c(),m(x,null,[n(T),n(_,{cleaningTitles:i.value,buttonTitles:a,cleaningOptionsSets:l.value},null,8,["cleaningTitles","cleaningOptionsSets"]),n(h,{companyinformations:s.value},null,8,["companyinformations"])],64))}};export{F as default};