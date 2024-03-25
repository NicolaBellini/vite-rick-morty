<script>
import { store } from "./data/store.js";
import axios from "axios";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
export default {
  components: {
    Header,
    Main,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getApi() {
      axios
        .get(this.store.apiUrl)
        .then((res) => {
          console.log("nella function", res.data.results);
          this.store.cardList = res.data.results;
          console.log("nello store", this.store.cardList[0]);
        })
        .catch((error) => console.log(error));
    },
  },

  mounted() {
    this.getApi();
  },
};
</script>

<template>
  <div class="wrapper">
    <Header /><br />
    <Main />
  </div>
</template>

<style lang="scss" scoped>
@use "./assets/scss/main.scss";

.wrapper {
  // background: url(https://images.unsplash.com/photo-1518141532615-4305c9f914c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fE5lcm98ZW58MHx8MHx8fDA%3D)
  //   top / cover no-repeat fixed/ rotateY(90deg);
  background-image: linear-gradient(to right, black, rgb(72, 143, 0), black);
}
</style>
