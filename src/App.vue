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
      this.store.cardList = [];
      this.store.nameList = [];
      axios
        .get(this.store.apiUrl, {
          params: this.store.queryParams,
        })
        .then((res) => {
          console.log("nella function", res.data.results);
          this.store.cardList = res.data.results;
          console.log("nello store", this.store.cardList[0]);
          this.store.nameList = this.store.cardList.map((item) => item.name);
          console.log(this.store.nameList);
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
    <Header @search="getApi()" /><br />
    <Main />
  </div>
</template>

<style lang="scss" scoped>
@use "./assets/scss/main.scss";

.wrapper {
  background-image: linear-gradient(to right, black, rgb(72, 143, 0), black);
}
</style>
