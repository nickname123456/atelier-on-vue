<script>
import axios from 'axios';

export default {
    data() {
        return {
            user: {}

        }
    },

    methods: {
        async loadData() {
            let response = await axios.post('/login', {
                email: localStorage.email,
                password: localStorage.password
            });
            if (response.data == 'Incorrect email!' || response.data == 'Incorrect password!') {
                this.goLogin()
            } else {
                this.user = response.data
            }
        }, 
        goLogin() {
            this.$router.push({
                name: 'login'
            })
        }
    },

    mounted() {
        this.loadData()
    }

}
</script>

<template>
    <main>
        <h1 class="m-5 text-center">Профиль</h1>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 align-items-center g-5">
                <div class="col"><img src="src/assets/clothes_img/plug.jpg" class="img-fluid"></div>
                <div class="col">
                    <div class="row row-cols-1 row-cols-md-2">
                        <div class="col">Имя: {{ user.name }}</div>
                        <div class="col">Фамилия: {{ user.surname }}</div>
                        <div class="col">Пароль: {{ user.password }}</div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>


<style scoped>
section {
    margin: 100px 0;
}

#catalog {
    margin: 100px;
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