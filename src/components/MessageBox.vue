<template>
  <div class="message-box">
    <div class="message-box-content">
      <p>Ваша заявка успешно отправлена!</p>
      <button class="close-button" @click="$emit('close')">Закрыть</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageBox",
};
</script>

<style scoped>
.message-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.message-box-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  color: #003153;
  font-size: 20px;
}

.close-button {
  font-size: 16px;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #003153;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.close-button:hover {
  background-color: #002644;
}
</style>
