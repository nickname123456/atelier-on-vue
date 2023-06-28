<script>
import axios from 'axios';

export default {
    data() {
        return {
            name: '',
            surname: '',
            email: '',
            password: ''
        }
    },

    methods: {
        async signup (evt) {
            evt.preventDefault();
            let response = await axios.post('/register', {
                name: this.name,
                surname: this.surname,
                password: this.password,
                email: this.email
            });

            localStorage.email = this.email;
            localStorage.password = this.password;
            this.goProfile();

        },
        goProfile() {
            this.$router.push({
                name: 'profile'
            })
        }
    },

    mounted () {
        
    }

}
</script>

<template>
      
    <main>
        <div class="container mb-5">
            <h1 class="text-center m-5">Регистрация</h1>
            <form @submit="signup" method="post">
                <div class="row g-3 mb-5">
                    <div class="col-md-6">
                        <label for="username" class="form-label">Имя</label>
                        <input v-model="name" type="text" id="username" class="form-control" name="name">
                    </div>
                    <div class="col-md-6">
                        <label for="lastname" class="form-label">Фамилия</label>
                        <input v-model="surname" type="text" id="lastname" class="form-control" name="surname">
                    </div>
                    <div class="col-md-6">
                        <label for="email" class="form-label">Почта</label>
                        <input v-model="email" type="email" id="email" class="form-control" name="email">
                    </div>
                    <div class="col-md-6">
                        <label for="password" class="form-label">Пароль</label>
                        <input v-model="password" type="password" id="password" class="form-control" name="password">
                    </div>
                </div>
                <div class="row g-3 m-4 justify-content-center">
                    <!-- <div class="col-md-7">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="agreement" name="agreed_to_notify">
                            <label for="agreement" class="form-check-label">Подписаться на рассылки</label>
                        </div>
                    </div> -->
                    <div class="col-md-8">
                        <button class="btn btn-primary w-100" type="submit">Зарегистрироваться</button>
                    </div>
                </div>
            </form>
        </div>
    </main>


</template>


<style></style>