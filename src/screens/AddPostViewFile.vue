<template>
    <div>
      <ModalWindow :showModal="showModal" @closeModal="closeModal" @confirmPayment="confirmPayment" />
      <div class="bg-gray-200 p-4 w-1/2 mx-auto mt-10 rounded">
        <h1 class="text-purple-900 text-4xl mb-4">Сурет арқылы пост генерациялау</h1>
        <form @submit.prevent="submitPost" class="flex flex-col space-y-2">
          <label for="title" class="text-purple-900 text-xl font-semibold">Телеграмдағы пост қандай болады?</label>
          <input type="text" id="title" v-model="title" class="rounded-lg px-3 py-2 text-black">
          <!-- Добавляем инпут для загрузки файла -->
          <input type="file" id="fileInput" @change="handleFileUpload" class="rounded-lg px-3 py-2 text-black">
          <!-- Конец нового кода -->
          <button type="submit" :disabled="requestCounter >= 7 || showModal" class="bg-purple-500 text-white rounded-lg px-4 py-2 hover:bg-purple-600">Генерациялау</button>
        </form>
      </div>
      <div class="bg-gray-200 p-4 w-1/2 mx-auto mt-10 rounded">
        <!-- Жауапты көрсету формасы -->
        <div v-if="serverResponse" class="mt-4">
          <h2 class="text-purple-900 text-4xl mb-4">Post</h2>
          <form @submit.prevent="submitTelegramPost" class="mt-4">
            <div class="mb-4">
              <label for="telegramApi" class="text-purple-900 text-xl">Telegram TOKEN-іңізді енгізіңіз:</label>
              <input type="text" id="telegramApi" v-model="telegramToken" class="ml-4 rounded-lg px-3 py-2 text-black text-xl">
            </div>
            <div class="mb-4">
              <label for="fileInput" class="text-purple-900 text-xl">Файлды таңдаңыз:</label>
              <input type="file" id="fileInput" @change="handleFileUpload" class="ml-4 rounded-lg px-3 py-2 text-black text-xl">
            </div>
            <textarea v-model="serverResponse" rows="6" class="rounded-lg px-3 py-4 h-[420px] text-xl text-black w-full mb-4"></textarea>
            <button type="submit" :disabled="requestCounter >= 7 || showModal" class="bg-purple-500 text-white text-2xl rounded-lg px-4 py-2 hover:bg-purple-600">Телеграмға жіберу</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { ref } from 'vue';
  import ModalWindow from './ModalWindow.vue';
  
  const title = ref('');
  const serverResponse = ref(null);
  const telegramToken = ref('');
  const selectedFile = ref(null);
  const requestCounter = ref(parseInt(localStorage.getItem('requestCounter')) || 0);
  const showModal = ref(requestCounter.value >= 7);
  
  const handleFileUpload = (event) => {
    selectedFile.value = event.target.files[0];
    console.log('Selected file:', selectedFile.value);
  };
  
  const submitPost = async () => {
  if (requestCounter.value >= 7) {
    showModal.value = true;
    return;
  }

  const formData = new FormData();
  formData.append('title', title.value);
  if (selectedFile.value) {
    formData.append('file', selectedFile.value);
  }

  console.log('Sending post data:', formData);

  try {
    const response = await fetch('http://localhost:3000/submit-post-view-img', {
      method: 'POST',
      body: formData
    });
    if (response.ok) {
      console.log('Данные успешно отправлены на сервер');
      const responseData = await response.json();
      console.log('a', responseData); // Извлекаем сообщение
      serverResponse.value = responseData.message;
      // Увеличиваем счетчик запросов
      requestCounter.value++;
      localStorage.setItem('requestCounter', requestCounter.value);
      // Проверяем, достиг ли счетчик значения 7
      if (requestCounter.value >= 7) {
        showModal.value = true;
      }
    } else {
      console.error('Ошибка при отправке данных на сервер');
    }
  } catch (error) {
    console.error('Ошибка при отправке данных:', error);
  }
};

  const submitTelegramPost = async () => {
    if (requestCounter.value >= 7) {
      showModal.value = true;
      return;
    }
  
    if (!selectedFile.value) {
      console.error('Файл не выбран');
      return;
    }
  
    const formData = new FormData();
    formData.append('message', serverResponse.value);
    formData.append('telegramToken', telegramToken.value);
    formData.append('photo', selectedFile.value);
  
    console.log('Sending telegram data:', {
      message: serverResponse.value,
      telegramToken: telegramToken.value,
      photo: selectedFile.value
    });
  
    try {
      const response = await fetch('http://localhost:3000/send-to-telegram', {
        method: 'POST',
        body: formData
      });
  
      if (response.ok) {
        console.log('Данные успешно отправлены в телеграмм');
        // Обработка успешной отправки в телеграмм
        // Увеличиваем счетчик запросов
        requestCounter.value++;
        localStorage.setItem('requestCounter', requestCounter.value);
        // Проверяем, достиг ли счетчик значения 7
        if (requestCounter.value >= 7) {
          showModal.value = true;
        }
      } else {
        console.error('Ошибка при отправке данных в телеграмм');
      }
    } catch (error) {
      console.error('Ошибка при отправке данных в телеграмм:', error);
    }
  };
  
  const closeModal = () => {
    showModal.value = false;
  };
  
  const confirmPayment = () => {
    // Удаляем счетчик запросов из localStorage и сбрасываем его
    localStorage.removeItem('requestCounter');
    requestCounter.value = 0;
    showModal.value = false;
  };
  </script>
  <style scoped>
  /* Здесь вы можете добавить стили по желанию */
  </style>
  