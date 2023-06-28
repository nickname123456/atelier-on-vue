<script>
import axios from 'axios';

export default {
    data() {
        return {
            clothes: [],
            search_clothes: [],
            search: ''
        }
    },
    methods: {
        async loadData() {
            let response = await axios.get('/getClothes');
            this.clothes = response.data;
            console.log(this.clothes);
        },

        updSearch() {
            let search = this.search.trim().toLowerCase();
            this.search_clothes = []

            for (let i = 0; i < this.clothes.length; i++) {
                if (this.clothes[i].title.toLowerCase().includes(search)) {
                    this.search_clothes.push(this.clothes[i])
                }
            }
        },

        goIndex() {
            this.$router.push({
                name: 'index'
            })
        },
        goCatalog() {
            this.$router.push({
                name: 'catalog'
            })
        },
        goCatalogCategory(category) {
            console.log(category);
            this.$router.push({
                name: 'catalog-category',
                params: {
                    category: category
                }
            })
        },
        goLogin() {
            this.$router.push({
                name: 'login'
            })
        },
        goProfile() {
            this.$router.push({
                name: 'profile'
            })
        },
        goRegistration() {
            this.$router.push({
                name: 'signup'
            })
        },
        goCloth(cloth_id) {
            this.$router.push({
                name: 'cloth',
                params: {
                    id: cloth_id
                }
            })
        }
    },
    mounted() {
        this.loadData()
    }
}


</script>
<template>
    <header class="sticky-top">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a @click="goIndex" class="navbar-brand">
                    <img src="src/assets/logo.svg" alt="Логотип" height="45">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a @click="goIndex" class="nav-link active" aria-current="page">Главная</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link text-dark dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                                aria-expanded="false">Каталог</a>
                            <ul class="dropdown-menu">
                                <li><a @click="goCatalogCategory('649aec7979581bdf51788438')"
                                        class="dropdown-item">Кофты</a></li>
                                <li><a @click="goCatalogCategory('649aec7979581bdf51788439')"
                                        class="dropdown-item">Комбинезоны</a>
                                </li>
                                <li><a @click="goCatalogCategory('649aec7979581bdf5178843a')"
                                        class="dropdown-item">Футболки</a></li>
                                <li><a @click="goCatalogCategory('649aec7979581bdf5178843b')"
                                        class="dropdown-item">Спортивные
                                        костюмы</a></li>
                                <li><a @click="goCatalogCategory('649aec7979581bdf5178843c')"
                                        class="dropdown-item">Варежки</a></li>
                                <li><a @click="goCatalogCategory('649aec7979581bdf5178843d')"
                                        class="dropdown-item">Куртки</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a @click="goCatalog" class="dropdown-item">Весь каталог</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/#about-us">О нас</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/#contacts">Контакты</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link text-dark dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                                aria-expanded="false">
                                <img src="src/assets/profile.png" alt="Логотип с профилем" height="25"></a>
                            <ul class="dropdown-menu">
                                <li><a @click="goProfile" class="dropdown-item">Профиль</a></li>
                                <li><a @click="goLogin" class="dropdown-item">Войти</a></li>
                                <li><a @click="goRegistration" class="dropdown-item">Регистрация</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div class="search_container">
                        <form class="d-flex">
                            <input v-model="search" @input="updSearch" id="search" class="form-control me-2" type="search"
                                placeholder="Поиск" aria-label="Поиск">
                            <!-- <button class="btn btn-outline-success" type="submit">Поиск</button> -->
                        </form>
                        <ul v-if="search" class="search_result">
                            <li v-for="(item, index) in search_clothes">
                                <a @click="goCloth(item._id)">{{ item.title }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
.search_container ul {
    position: absolute;
    margin: 0;
    padding: 0;
}

.search_container li {
    border: 1px solid #b9bbbb;
    width: 688px;
    list-style-type: none;
    background-color: #F8F9FA;
    padding: 2px 5px;
    border-radius: 5px;
    margin: 2px 0px;
}

.search_container li a {
    color: black;
    text-decoration: none;
}


@media (min-width: 990px) {
    .search_container li {
        width: 206.4px;
    }
}</style>