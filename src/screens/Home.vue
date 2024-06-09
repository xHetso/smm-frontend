<template>
    <div class="flex relative container mt-10 mx-auto">
        <div class="flex relative flex-col items-center justify-center w-full text-center w-1/3 mx-auto">
            <h1 class=" relative z-10 text-4xl font-semibold mb-5">Әлеуметтік желілерге автоматты түрде жариялау</h1>
            <h2 class="text-3xl">Алдын ала жоспарланған кесте бойынша мәтінді, фотосуреттерді және бейне материалдарды автоматты түрде жариялау.</h2>
            <router-link to="/add-post" class="bg-black text-white py-4 px-6 mt-4 text-2xl rounded w-[400px] hover:bg-[#7414f3]">Пост генерациялау</router-link>
        </div>
        <div class="relative">
            <img class="z-50" src="https://static.tildacdn.com/tild6463-3034-4438-b262-323162656339/photo.svg" alt="">
            <img class="z-40 absolute top-0 h-[400px]" src="https://static.tildacdn.com/tild3966-6430-4962-b837-356537343537/_.png" alt="">
            <img class="absolute z-0 top-0 right-20 h-[400px]" src="https://static.tildacdn.com/tild6163-3766-4437-b437-633331333665/Group_1321317709.png" alt="">
            <img class="absolute z-40 bottom-0 right-25 h-[400px]" src="https://static.tildacdn.com/tild3636-6630-4134-a330-663361656635/Group_1321317710.png" alt="">
            <img class="absolute z-60 bottom-0 right-0 h-[400px]" src="/src/assets/images/bloom.jpg" alt="">
        </div>
    </div>

    <div class="mt-[150px]">
        <h1 class="text-[#7414f3] text-center text-[80px]">332 730 231</h1>
        <h2 class="text-center text-[50px]">жарияланған посттар</h2>
        <img src="/src/assets/images/social-media.png" alt="">
    </div>

    <div class="flex container mx-auto">
        <div class="flex relative flex-col justify-center w-full w-1/3 mx-auto">
            <h1 class="text-4xl font-semibold mb-5">
                Chat GPT+ негізінде SMMplanner-ден AI ассистент
            </h1>
            <p class="text-2xl">
                Әлеуметтік желілерде сапалы контент жасауға арналған құрал. Бірегей идеялар мен мәтіндерді қолданып, тартымды посттар жасаңыз, аудиторияңызбен қарым-қатынас жасау үшін ИИ-дің барлық қуатын пайдаланыңыз.
            </p>
            <h2 class="text-2xl mt-10 text-blue-500">
                Нейрондық желілер кез келген мәтінді жазуға көмектеседі
            </h2>
            <router-link to="/add-post" class="bg-black text-white py-4 px-6 mt-4 text-2xl rounded w-[270px] hover:bg-[#7414f3]">Пост генерациялау</router-link>
        </div>
        <div class="w-1/2">
            <img src="/src/assets/images/chatgpt.png" alt="">
        </div>
    </div>

    <div class="bg-[#14202d] pb-20">
        <div class="text-white container mx-auto ">
            <h1 class="faq-header text-white text-5xl pt-20">Жиі қойылатын сұрақтар</h1>
            <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
                <div class="faq-question text-white text-xl pt-10" @click="toggleAnswer(index)">{{ faq.question }}</div>
                <div class="faq-answer text-white text-xl" v-if="faq.show">{{ faq.answer }}</div>
            </div>
        </div>
        <div class="bg-[#7c14f3] container p-10 mx-auto mt-20 flex gap-20 items-center justify-center">
            <a href="https://t.me/">
                <h1 class="text-white text-4xl">Телеграм</h1>
            </a>
            <a href="https://vk.com/">
                <h1 class="text-white text-4xl">Вконтакте</h1>
            </a>
            <a href="mailto:smm_planner@mail.ru">
                <button class="bg-black text-white py-4 px-6 mt-4 text-xl rounded w-[400px]">Бізбен байланысу</button>
            </a>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const faqs = ref([
    {
        question: 'Сіздің қызметіңіз не және ол не үшін арналған?',
        answer: 'Біздің қызметіміз Telegram-да посттарды жасау үшін арналған. Ол Telegram-каналдары үшін жарияланымдарды жасау мен жоспарлауды оңайлатып, контентті басқаруды және оның тиімділігін арттырады.',
        show: false
    },
    {
        question: 'Сайтыңызда пайдаланушылардың авторизациясы қалай жұмыс істейді?',
        answer: 'Біз пайдаланушыларды тіркеуге және жүйеге кіруге мүмкіндік беретін авторизация жүйесін енгізуді жоспарлап отырмыз, ол топтарды басқару және жарияланымдарды жоспарлау сияқты қосымша функцияларға қол жеткізуге мүмкіндік береді.',
        show: false
    },
    {
        question: 'Команда топтары дегеніміз не және олар қалай жұмыс істейді?',
        answer: 'Біз контентпен бірлесіп жұмыс істеу үшін пайдаланушыларды командаларға біріктіруге мүмкіндік беретін топтар функционалын енгізуді жоспарлап отырмыз. Сіз рөлдерді тағайындап, міндеттерді делегаттап және жарияланымдарды жоспарлай аласыз.',
        show: false
    },
    {
        question: 'Жарияланымдарды алдын ала жоспарлауға бола ма?',
        answer: 'Иә, біз жарияланымдарды жоспарлау мүмкіндігін қосамыз деп жоспарлап отырмыз. Сіз әрбір пост үшін күн мен уақытты орнатып, ол көрсетілген уақытта автоматты түрде жарияланатын болады.',
        show: false
    },
    {
        question: 'Егер қызметті қолданса және аккаунтта екі қызметкер әр түрлі қалалардан жұмыс істесе, Instagram аккаунты бұғатталмай ма?',
        answer: 'Біздің қызметімізді пайдалану Instagram аккаунтының бұғатталуына әкелмеуі керек, себебі ол платформаның саясаттары аясында жұмыс істейді. Дегенмен, аккаунттың қауіпсіздігі үшін екі факторлы аутентификацияны пайдалану және қызметкерлерді пайдалану ережелері туралы хабардар ету ұсынылады.',
        show: false
    },
    {
        question: 'Сіз басқа әлеуметтік желілерге кеңеюді жоспарлайсыз ба?',
        answer: 'Иә, болашақта біз қызметіміздің функционалын басқа әлеуметтік желілерде жұмыс істеу үшін кеңейтуді жоспарлап отырмыз. Сіз Telegram-да ғана емес, басқа да танымал платформаларда посттарды жасай аласыз және жариялай аласыз.',
        show: false
    },
]);


const toggleAnswer = (index) => {
    faqs.value[index].show = !faqs.value[index].show;
};
</script>

<style scoped>
.faq-header {
    text-align: center;
    margin-bottom: 20px;
}
.faq-item {
    border-bottom: 1px solid white;
    padding: 10px 0;
}
.faq-question {
    cursor: pointer;
    position: relative;
    padding-right: 30px;
}
.faq-question::after {
    content: '+';
    position: absolute;
    right: 0;
    top: 0;
}
.faq-answer {
    padding: 10px 0;
}
.faq-question.active::after {
    content: '-';
}
</style>
