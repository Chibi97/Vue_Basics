<template>
    <div class="container">
        <div class="row row-centered">
            <div class="filters">
                <div
                    v-for="(genre, i) in genres"
                    :key="i"
                    class="filter-option"
                >
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            :value="genre"
                            v-model="checkedGenres"
                            :id="genre + i"
                        />
                        <label class="form-check-label" :for="genre + i">
                            {{ genre }}
                        </label>
                    </div>
                </div>
            </div>
            <product
                v-for="product in filteredProducts"
                :key="product.id"
                :image="product.image"
                :title="product.name"
                :desc="product.description"
                :in-stock="product.in_stock"
                class="col-xs-12 col-md-5"
                @added-to-cart="handleAddToCart(product)"
            />
        </div>
    </div>
</template>

<script>
import Product from "./Product.vue";
import axios from "axios";

export default {
    name: "ProductsList",
    components: { Product },
    data() {
        return {
            products: [],
            genres: [
                "Adventure",
                "Drama",
                "Sci-Fi",
                "Comedy",
                "Mystery",
                "Psychological",
                "Military",
            ],
            checkedGenres: [],
        };
    },
    created() {
        axios
            .get("http://localhost:8000/api/comics")
            .then((response) => {
                this.products = response.data;
            })
            .catch((error) => console.log(error));
    },
    methods: {
        handleAddToCart(product) {
            product.in_stock--;
            this.$root.$emit("update-cart", product);
        },
    },
    computed: {
        filteredProducts() {
            if (this.checkedGenres.length === 0) {
                return this.products;
            }

            return this.products.filter((product) => {
                return product.genres.some((genre) =>
                    this.checkedGenres.includes(genre)
                );
            });
        },
    },
};
</script>

