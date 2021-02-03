import Vue from "vue";
import App from "./App.vue";
import "./assets/style.css";

Vue.config.productionTip = false;

new Vue({
    beforeCreate() {
        this.$on("update-cart", () => {
            this.inCartCount++;
        });
    },
    data() {
        return {
            inCartCount: 0,
        };
    },
    render: h => h(App),
}).$mount("#app");
