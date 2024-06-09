<template>
  <div class="bg-gray-200 p-4 w-1/2 mx-auto mt-10 rounded">
    <h1 class="text-purple-900 text-4xl mb-4">Generate</h1>
    <form @submit.prevent="submitPost" class="flex flex-col space-y-2">
      <label for="title" class="text-purple-900 text-xl font-semibold">Телеграмдағы пост қандай болады?</label>
      <input type="text" id="title" v-model="title" class="rounded-lg px-3 py-2 text-black">
      <button type="submit" class="bg-purple-500 text-white rounded-lg px-4 py-2 hover:bg-purple-600">Генерациялау</button>
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
        <button type="submit" class="bg-purple-500 text-white text-2xl rounded-lg px-4 py-2 hover:bg-purple-600">Телеграмға жіберу</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('');
const serverResponse = ref(null);
const telegramToken = ref('');
const selectedFile = ref(null);

const handleFileUpload = (event) => {
  selectedFile.value = event.target.files[0];
  console.log('Selected file:', selectedFile.value);
};

const submitPost = async () => {
  const postData = { title: title.value };

  console.log('Sending post data:', postData);

  try {
    const response = await fetch('http://localhost:3000/submit-post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    });

    if (response.ok) {
      console.log('Данные успешно отправлены на сервер');
      const responseData = await response.json();
      serverResponse.value = responseData.message; // Извлекаем сообщение
    } else {
      console.error('Ошибка при отправке данных на сервер');
    }
  } catch (error) {
    console.error('Ошибка при отправке данных:', error);
  }
};
const submitTelegramPost = async () => {
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
    } else {
      console.error('Ошибка при отправке данных в телеграмм');
    }
  } catch (error) {
    console.error('Ошибка при отправке данных в телеграмм:', error);
  }
};

</script>

<style scoped>
/* Здесь вы можете добавить стили по желанию */
</style>
