import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import API from './views/API.vue'

const app = createApp(App)

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/api', component: API }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

app.use(router).mount('#app')
