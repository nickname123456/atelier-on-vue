

<script>
import axios from 'axios';


export default {
    data() {
        return {
            categories: []
        }
    },

    methods: {
        async getCategories() {
            let response = await axios.get('/getCategories');
            this.categories = response.data;
        },

        goCatalogCategory(cloth) {
            console.log(cloth);
            this.$router.push({
                name: 'catalog-category',
                params: {
                    category: cloth._id
                }
            })
        }

    },
    mounted() {
        this.getCategories()
    }

}
</script>


<template>

    <main>
        <section>
            <h2 class="text-center">Каталог</h2>
            <div class="container catalog">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    
                    <div v-for="(item, index) in categories" class="col">
                        <a @click="goCatalogCategory(item)">
                            <div class="card">
                                <img :src="'src/assets/clothes_img/' + item.image" alt="Фото теплого свитера">
                                <div class="card-img-overlay d-flex justify-content-center align-items-center">
                                    <h2 class="card-title">{{item.title}}</h2>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                </div>
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