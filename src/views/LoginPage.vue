<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: '',
            incorrect_data: false
        }
    },

    methods: {
        async login (evt) {
            evt.preventDefault()
            let response = await axios.post('/login', {
                email: this.email,
                password: this.password
            })

            if (response.data == 'Incorrect email!' || response.data == 'Incorrect password!') {
                this.incorrect_data = true;
                return
            }

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
            <h1 class="text-center m-5">Вход</h1>
            <h3 v-if="incorrect_data" class="text-center text-danger">Неправильный логин или пароль!</h3>
            <form @submit="login" method="post">
                <div class="row g-3 mb-5 justify-content-center">
                    <div class="col-md-4">
                        <label for="email" class="form-label">Почта</label>
                        <input v-model="email" type="email" id="email" class="form-control" name="email">
                    </div>
                    <div class="col-md-4">
                        <label for="password" class="form-label">Пароль</label>
                        <input v-model="password" type="password" id="password" class="form-control" name="password">
                    </div>
                </div>
                <div class="row g-3 m-4 justify-content-center">
                    <div class="col-md-4">
                        <button class="btn btn-primary w-100" type="submit">Войти</button>
                    </div>
                </div>
            </form>
        </div>
    </main>


</template>


<style></style>