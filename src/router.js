import { createRouter, createWebHistory } from 'vue-router'
import { roles } from './api/roles'
import Layout from './components/Layout.vue'
import Home from './screens/Home.vue'
import AddPost from './screens/AddPost.vue' // Убедитесь, что путь правильный
import AddPostViewFile from './screens/AddPostViewFile.vue'
import About from './screens/About.vue'
import Portfolio from './screens/Portfolio.vue'
import Register from './screens/Register.vue'
import Login from './screens/Login.vue'
import AIAssistent from './screens/AIAssistent.vue'
import Table from './screens/Table.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    meta: { role: roles.user },
    children: [
      {
        path: '',
        name: 'Басты бет',
        component: Home,
        meta: { role: roles.user },
      },
      {
        path: 'add-post',
        name: 'Пост генерациялау',
        component: AddPost,
        meta: { role: roles.user },
      },
      {
        path: 'about',
        name: 'Біз туралы',
        component: About,
        meta: { role: roles.user },
      },
      {
        path: 'add-post-view-img',
        name: 'Сурет арқылы генерациялау',
        component: AddPostViewFile,
        meta: { role: roles.user },
      },
      {
        path: 'ai-assistant',
        name: 'AI көмекші',
        component: AIAssistent,
        meta: { role: roles.user },
      },
      {
        path: 'portfolio',
        name: 'Портфолио',
        component: Portfolio,
        meta: { role: roles.user },
      },
      {
        path: 'login',
        name: 'Login',
        component: Login,
        meta: { role: roles.user },
      },
      {
        path: 'register',
        name: 'Register',
        component: Register,
        meta: { role: roles.user },
      },
      {
        path: 'admin',
        name: 'Admin',
        component: Login,
        meta: { role: roles.user },
      },
      {
        path: 'table',
        name: 'Table',
        component: Table,
        meta: { role: roles.user },
      },
    ],
  },
]
const getUserRole = () => {
	const userData = JSON.parse(localStorage.getItem('user'))
	return userData && userData.isAdmin ? roles.admin : roles.user
}

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
    const userRole = getUserRole();
    if (to.meta.role && to.meta.role !== userRole && userRole !== roles.admin) {
        return next({ name: 'Авторизация' });
    }
    next();
});
export default router
