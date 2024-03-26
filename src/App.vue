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
      isError: false,
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
          this.store.errorString = "";
          this.isError = false;
        })
        .catch(
          (error) => console.log(error),
          (this.store.errorString =
            "Non ci sono persone con quel nome in questo universo!!"),
          (this.isError = true)
        );
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
    <div v-if="this.isError" class="error">{{ this.store.errorString }}</div>
    <Main v-else-if="!this.isError" />
  </div>
</template>

<style lang="scss" scoped>
@use "./assets/scss/main.scss";

.wrapper {
  background-image: linear-gradient(to right, black, rgb(72, 143, 0), black);
  .error {
    height: 100vh;
    background-image: linear-gradient(to right, black, rgb(72, 143, 0), black);
    margin-top: 150px;
    color: greenyellow;
    font-size: 3rem;
    text-align: center;
  }
}
</style>
