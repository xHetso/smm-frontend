<script setup>
import { ref } from 'vue';
import axios from 'axios';

const name = ref('');
const phone = ref('');
const email = ref('');
const message = ref('');

const submitForm = async () => {
    try {
        const response = await axios.post('http://localhost:3000/submit-form', {
            name: name.value,
            phone: phone.value,
            email: email.value,
            message: message.value,
        });
        console.log(response.data);
    } catch (error) {
        console.error('There was an error submitting the form!', error);
    }
};
</script>
<template>

    <div class="bg-[#7c14f3] mt-10 container p-10 mx-auto flex justify-between rounded">
        <div class="flex flex-col w-2/3 mr-10">
            <h1 class="text-5xl font-semibold text-white text-center mb-10">Біз туралы</h1>
            <h1 class="text-2xl font-semibold text-white text-center mb-10">
    Біздің сайт - бұл Telegram-дағы посттарды жасауға арналған инновациялық платформа. Қазіргі кезеңде біз Telegram-ға шоғырландық, бірақ жақын арада біз басқа әлеуметтік желілерге де кеңеюді жоспарлап отырмыз, пайдаланушыларға бірдей постты бірнеше желіде бір уақытта жариялауға мүмкіндік береді.
</h1>
<h1 class="text-2xl font-semibold text-white text-center mb-10">
    Біз пайдаланушыларды авторизациялау жүйесін енгізу бойынша жұмыс істеп жатырмыз, бұл әрбір пайдаланушыға өзінің бірегей профилін жасауға мүмкіндік береді. Сонымен қатар, біз топтар мен командаларды құру функционалын жасап жатырмыз, бұл пайдаланушыларға контент жасау үшін бірігіп жұмыс істеуге мүмкіндік береді. Мұндай топтарда тапсырмаларды бөліп, жарияланымдарды жоспарлап, контентті жасауды ұйымдасқан және тиімді процесс жасауға болады.
</h1>
<h1 class="text-2xl font-semibold text-white text-center mb-10">
    Біздің мақсатымыз - контентті басқаруға ыңғайлы және қуатты құралдар ұсыну, оны жасау және жариялау процесін жеңілдету. Біздің платформамен сіз өз идеяларыңыз бен хабарламаларыңызды оңай және тез таратып, әртүрлі әлеуметтік желілерде мүмкіндігінше көп аудиторияны қамтуға мүмкіндік аласыз.
</h1>
   
</div>
        <div class="w-1/3">
            <img class="h-[600px] mt-20 rounded" src="/src/assets/images/woman-using-smartpho.png" alt="">
        </div>
    </div>

    <div class="bg-[#7c14f3] w-[500px] mx-auto mt-10 p-10 rounded-xl">
        <h1 class="text-5xl font-semibold text-white text-center mb-10">Кері байланыс</h1>
        <form class="max-w-lg mx-auto" @submit.prevent="submitForm">
            <div class="mb-6">
                <label class="block text-white text-2xl font-bold mb-2" for="name">Аты</label>
                <input v-model="name" class="w-full px-3 py-2 text-xl leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Сіздің атыңыз">
            </div>
            <div class="mb-6">
                <label class="block text-white text-2xl font-bold mb-2" for="phone">Телефон</label>
                <input v-model="phone" class="w-full px-3 py-2 text-xl leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Сіздің телефон">
            </div>
            <div class="mb-6">
                <label class="block text-white text-2xl font-bold mb-2" for="email">Эл. пошта</label>
                <input v-model="email" class="w-full px-3 py-2 text-xl leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Сіздің email">
            </div>
            <div class="mb-6">
                <label class="block text-white text-2xl font-bold mb-2" for="message">Хабарлама</label>
                <textarea v-model="message" class="w-full px-3 py-2 text-xl leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="message" rows="4" placeholder="Сіздің хабарламаңыз"></textarea>
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-white hover:bg-gray-200 text-[#7c14f3] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Жіберу
                </button>
            </div>
        </form>
    </div>
    <div class="bg-[#7c14f3] container mx-auto mt-10 p-10">
    <h1 class="text-5xl font-semibold text-white text-center mb-10">Біздің команда</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="text-center">
            <div class="mx-auto w-[400px] h-[600px] overflow-hidden rounded-lg">
                <img src="/src/assets/images/p1.jpg" alt="" class=" h-full object-cover">
            </div>
            <h2 class="text-4xl font-semibold text-white mt-4">Айжан Қуандықова</h2>
            
            <p class="text-white text-2xl">Frontend Developer</p>
        </div>
        <div class="text-center">
            <div class="mx-auto w-[400px] h-[600px] overflow-hidden rounded-lg">
                <img src="/src/assets/images/p2.jpg" alt="" class=" h-full object-cover">
            </div>
            <h2 class="text-4xl font-semibold text-white mt-4">Ерлан Жұмабеков</h2>
            <p class="text-white text-2xl">Backend Developer</p>
        </div>
        <div class="text-center">
            <div class="mx-auto w-[400px] h-[600px] overflow-hidden rounded-lg">
                <img src="/src/assets/images/p3.jpg" alt="" class=" h-full object-cover">
            </div>
            <h2 class="text-4xl font-semibold text-white mt-4">Дидар Ерғалиев</h2>
            <p class="text-white text-2xl">Team Lead</p>
        </div>
        <div class="text-center">
            <div class="mx-auto w-[400px] h-[600px] overflow-hidden rounded-lg">
                <img src="/src/assets/images/p4.jpg" alt="" class=" h-full object-cover">
            </div>
            <h2 class="text-4xl font-semibold text-white mt-4">Жанар Әбдіразақова</h2>
            <p class="text-white text-2xl">Designer</p>
        </div>
        <div class="text-center">
            <div class="mx-auto w-[400px] h-[600px] overflow-hidden rounded-lg">
                <img src="/src/assets/images/p5.jpg" alt="" class=" h-full object-cover">
            </div>
            <h2 class="text-4xl font-semibold text-white mt-4">Айгүл Тілеуова</h2>
            <p class="text-white text-2xl">Manager</p>
        </div>
        <div class="text-center">
            <div class="mx-auto w-[400px] h-[600px] overflow-hidden rounded-lg">
                <img src="/src/assets/images/p6.jpg" alt="" class=" h-full object-cover">
            </div>
            <h2 class="text-4xl font-semibold text-white mt-4">Санжар Мұхамедов</h2>
            <p class="text-white text-2xl">Director</p>
        </div>
    </div>
</div>


</template>

<style scoped>
</style>
