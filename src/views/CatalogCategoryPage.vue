

<script>
import axios from 'axios';


export default {
    data() {
        return {
            clothes: []
        }
    },

    methods: {
        async loadClothes() {
            let response = await axios.get('/getClothes', {
                params: {
                    category: this.$route.params.category
                }
            });
            this.clothes = response.data;
            console.log(this.clothes);
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
        this.loadClothes()
    },
    watch: {
        $route () {
            this.loadClothes();
        }
    }

}
</script>


<template>

<main>
        <h1 id="title" class="text-center m-5">{{title}}</h1>
        <div id="place_for_items" class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 justify-content-center">
            
            <div v-for="(item, index) in clothes" class="col">
                <div class="card">
                    <img :src="'src/assets/clothes_img/' + item.image" class="card-img-top">
                    <div class="card-body">
                        <h4 class="card-title">{{item.title}}</h4>
                        <div class="mb-2" style="max-height: 24px;">
                            <p class="card-text"
                                style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                                {{item.description}}</p>
                        </div>
                        <div class="row align-items-center justify-content-center">
                            <div class="col-4">
                                <span class="price">{{item.price}}р</span>
                            </div>
                            <div class="col-4">
                                <a @click="goCloth(item._id)" class="btn btn-primary">Подробнее</a>
                            </div>
                        </div>
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