<script>
import axios from 'axios';

export default {
    data() {
        return {
            cloth: { }
        }
    },

    methods: {
        async loadCloth() {
            let response = await axios.get('/getCloth', {
                params: {
                    id: this.$route.params.id
                }
            });
            this.cloth = response.data;
            console.log(this.cloth);
        }
    },

    mounted () {
        this.loadCloth()
    }

}
</script>

<template>
    <main class="m-auto mb-5 mt-5 container">
        <h1 class="text-center mb-5">{{ cloth.title }}</h1>
        <div class="row row-cols-1 row-cols-md-2 align-items-center g-5">
            <div class="col"><img :src="'src/assets/clothes_img/' + cloth.image" class="img-fluid"></div>
            <div class="col">
                <div class="mb-5">{{ cloth.description }}</div>
                <div class="row align-items-center justify-content-center">
                    <div class="col-2">
                        <span class="price">{{ cloth.price }}р</span>
                    </div>
                    <div class="col-2">
                        <a class="btn btn-primary">Купить</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>


<style></style>