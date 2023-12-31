import { createRouter, createWebHistory } from 'vue-router'


// Компоненты страниц
import IndexPage from './views/IndexPage.vue';
import CatalogPage from './views/CatalogPage.vue';
import CatalogCategoryPage from './views/CatalogCategoryPage.vue';
import ClothPage from './views/ClothPage.vue';
import LoginPage from './views/LoginPage.vue';
import ProfilePage from './views/ProfilePage.vue';
import SignupPage from './views/SignupPage.vue';


export default createRouter({
    // История переходов сохраняется
    history: createWebHistory(),


    // Роуты и компоненты
    routes: [
        {
            path: '/',
            name: 'index',
            component: IndexPage,
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: CatalogPage
        },
        {
            path: '/category-:category',
            name: 'catalog-category',
            component: CatalogCategoryPage
        },
        {
            path: '/cloth-:id',
            name: 'cloth',
            component: ClothPage
        },
        {
            path: '/login',
            name: 'login',
            component: LoginPage
        },
        {
            path: '/profile',
            name: 'profile',
            component: ProfilePage
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignupPage
        }
    ]
})