<template>
    <h1 class="text-5xl text-center mt-10 mb-10">Хабарламалар</h1>
    <div class="flex flex-wrap gap-4 container mx-auto">
        <div v-for="(item, index) in items" :key="index" class="">
            <div class="bg-purple-600 text-white text-xl p-4 mb-4 rounded-xl">
                <h2 class="text-white">Аты: {{ item.name }}</h2>
                <p class="text-white">Телефон: {{ item.phone }}</p>
                <p class="text-white">Электронды пошта: {{ item.email }}</p>
                <p class="text-white">Хабарлама: {{ item.message }}</p>
                <button @click="deleteItem(index)" class="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Жою</button>
            </div>
        </div>
    </div>
</template>

  
<script setup>
import { ref, onMounted } from 'vue';

const items = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3000/get-form');
    const data = await response.json();
    items.value = data;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }
});

const deleteItem = async (index) => {
  try {
    const response = await fetch(`http://localhost:3000/delete/${index}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      // Удалить элемент из массива по индексу
      items.value.splice(index, 1);
    } else {
      console.error('Ошибка при удалении элемента');
    }
  } catch (error) {
    console.error('Ошибка при удалении элемента:', error);
  }
};
</script>

  
  <style scoped>
  /* Дополнительные стили для оформления */
  </style>
  