<template>
    <div id="app">
        <nav class="navbar navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">Manga App</a>
                <i class="fas fa-shopping-cart">
                    <span>{{ inCartCount }}</span>
                </i>
            </div>
        </nav>
        <products-list />

        <footer>
            <div class="footer-container">
                <p>From Vue To You ~ the basics</p>
                <p>BlueGrid Knowledge Transfer 2021</p>
                <p>Olja Ivkovic</p>
            </div>
        </footer>
    </div>
</template>

<script>
import ProductsList from "./components/ProductsList.vue";

export default {
    name: "App",
    components: {
        ProductsList,
    },
    computed: {
        inCartCount() {
            return this.$root.inCartCount;
        },
    },
};
</script>


<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
