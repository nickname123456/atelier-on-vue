<script>

</script>
<template>
    <header class="sticky-top">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a href="index.html#home" class="navbar-brand">
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
                            <a class="nav-link active" aria-current="page" href="index.html#home">Главная</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link text-dark dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                                aria-expanded="false">Каталог</a>
                            <ul class="dropdown-menu">
                                <li><a href="detail_catalog.html?topic=sweatshirts" class="dropdown-item">Кофты</a></li>
                                <li><a href="detail_catalog.html?topic=overalls" class="dropdown-item">Комбинезоны</a>
                                </li>
                                <li><a href="detail_catalog.html?topic=t_shirts" class="dropdown-item">Футболки</a></li>
                                <li><a href="detail_catalog.html?topic=tracksuits" class="dropdown-item">Спортивные
                                        костюмы</a></li>
                                <li><a href="detail_catalog.html?topic=mittens" class="dropdown-item">Варежки</a></li>
                                <li><a href="detail_catalog.html?topic=jackets" class="dropdown-item">Куртки</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a href="catalog.html" class="dropdown-item">Весь каталог</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="index.html#about-us">О нас</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="index.html#contacts">Контакты</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link text-dark dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                                aria-expanded="false">
                                <img src="src/assets/profile.png" alt="Логотип с профилем" height="25"></a>
                            <ul class="dropdown-menu">
                                <li><a href="profile.html" class="dropdown-item">Профиль</a></li>
                                <li><a href="signup.html" class="dropdown-item">Регистрация</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div class="search_container">
                        <form class="d-flex">
                            <input id="search" class="form-control me-2" type="search" placeholder="Поиск"
                                aria-label="Поиск">
                            <!-- <button class="btn btn-outline-success" type="submit">Поиск</button> -->
                        </form>
                        <ul class="search_result">
                            <!-- Здесь будет результат поиска -->
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
}
</style>