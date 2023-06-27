

<script>

export default {

}
</script>


<template>
    <main>
        <section class="banner" id="home">
            <div class="card business-card">
                <img src="src/assets/desktop.jpg" alt="Рабочий стол ателье" class="">
                <div class="card-img-overlay">
                    <p class="animate__animated animate__fadeInRight"><b>Введите название - </b>это что-то там там
                        тотото. Мы на рынке с того-та года. Мы очень крутые.
                        Купи ченить, а?</p>
                </div>
            </div>
        </section>

        <section class="container-md" id="catalog">
            <h2 class="text-center animate__animated animate__bounceIn">Каталог</h2>
            <div class="row row-cols-1 row-cols-md-2">
                <div class="col">
                    <h3 class="text-center">Куртки</h3>
                    <div id="jackets" class="row row-cols-1 row-cols-md-2 g-3">

                        <!-- Сюда js вставит карточки -->

                    </div>
                </div>

                <div class="col">
                    <h3 class="text-center">Кофты</h3>
                    <div id="sweatshirts" class="row row-cols-1 row-cols-md-2 g-3">

                        <!-- Сюда js вставит карточки -->

                    </div>
                </div>
            </div>
            <div class="view-all-catalog d-flex justify-content-center m-10">
                <a href="catalog.html" class="btn btn-info">Посмотреть весь каталог</a>
            </div>

        </section>

        <section id="about-us">
            <h2 class="text-center">О нас</h2>
            <div class="d-flex">
                <div class="container-fluid">
                    <div class="row row-cols-1 row-cols-md-2 align-items-center">
                        <div class="col">
                            <h3 class="text-center">Заголовок</h3>
                            <p class="text-about-us">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
                                vitae inventore cum hic
                                iste, vero laudantium qui voluptatem alias perferendis. Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Adipisci, possimus assumenda! Dicta, optio? Sed itaque
                                amet numquam autem aliquam quisquam!</p>
                        </div>
                        <div class="col">
                            <img src="src/assets/women-working.jpg" alt="Женщина работает" width="100%">
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section id="contacts">
            <h2 class="text-center">Контакты</h2>
            <h4 class="text-center">Хочешь быть в курсе самых свежих скидок? Подписывайся!</h4>
            <div class="d-flex justify-content-evenly social-networks mt-4">
                <a href="https://vk.com/kirillarz" target="_blank"><img src="src/assets/vk_logo.png"
                        alt="Логотип ВКонтакте"></a>
                <a href="https://t.me/kirillarz" target="_blank"><img src="src/assets/tg_logo.png" alt="Логотип Телеграма"></a>
            </div>
        </section>
    </main>
</template>


<style scoped>
section {
    margin: 100px 0;
}

.banner {
    margin-top: 0;
}

.business-card img {
    height: 400px;
    object-fit: cover;
}

.business-card {
    height: 400px;
}

.business-card .card-img-overlay p {
    font-size: 30px;
    text-align: right;
}

.business-card .card-img-overlay {
    padding: 80px 0 0 0;
}

@media (min-width: 700px) {
    .business-card .card-img-overlay {
        padding: 120px 20px 120px 40%;
    }
}

.view-all-catalog {
    margin: 30px 0;
}

.view-all-catalog a {
    font-size: 25px;
}

.text-about-us {
    font-size: 20px;
}

.social-networks a img {
    width: 100%;
}

.social-networks a {
    width: 10%;
    border-radius: 20%;
    transition: 0.3s;
    padding: 5px;
}

.social-networks a:hover {
    border: 5px solid #3191c8;
    transform: scale(1.2);
}

footer img {
    width: 20px;
}

.catalog .card {
    width: 300px;
    height: 350px;
}

.catalog .card img {
    width: 300px;
    height: 350px;
    object-fit: cover;
}


.catalog .card h2 {
    font-size: 40px;
    color: white;
    background-color: #00000071;
}

.card {
    transition: 0.3s;
}

.card:active {
    transform: scale(1.1);
}
</style>