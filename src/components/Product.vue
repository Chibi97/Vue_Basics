<template>
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-5">
                <img :src="image" :alt="title" />
            </div>
            <div class="col-md-7">
                <div class="card-body">
                    <h5 class="card-title">{{ title }}</h5>
                    <p class="card-text">{{ desc | limit(255) }}</p>
                    <p class="card-text">
                        <small class="text-muted"
                            >In Stock: {{ inStock }}
                        </small>
                    </p>
                    <button
                        :disabled="inStock < 1"
                        class="btn btn-primary"
                        @click="addToCart"
                    >
                        Add to cart
                    </button>

                    <span v-if="inStock < 1" class="danger">
                        Out of stock
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Product",
    props: ["image", "title", "desc", "in-stock"],
    filters: {
        limit(value, size) {
            if (!value) return "";

            value = value.toString();

            if (value.length <= size) {
                return value;
            }
            return value.substr(0, size) + "...";
        },
    },

    methods: {
        addToCart() {
            // this.inStock = --this.inStock; not possible!
            if (this.inStock > 0) {
                this.$emit("added-to-cart");
            }
        },
    },
};
</script>

<style scoped>
img {
    width: 100%;
    height: 330px;
}

.card {
    margin: 0.5rem;
}
</style>