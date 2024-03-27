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
        .get(this.store.apiUrl, {})

        .then((res) => {
          this.store.cardList = res.data.results;

          this.store.nextPageUrl = res.data.info.next;

          this.store.pageNumber = res.data.info.pages;

          console.log("nello store", this.store.pageNumber);

          this.store.nameList = this.store.cardList.map((item) => item.name);
          // creazione array degli status per popolare la select
          this.store.statusList = [
            ...new Set(this.store.cardList.map((item) => item.status)),
          ];
          // creazione array degli species per popolare la select
          this.store.speciesList = [
            ...new Set(this.store.cardList.map((item) => item.species)),
          ];

          this.store.errorString = "";
          this.isError = false;
        })
        .catch(
          (error) => console.log(error),
          (this.store.errorString = ""),
          (this.isError = true)
        );
    },
    getParamsApi(ApiUrl) {
      axios
        .get(ApiUrl, {
          params: this.store.queryParams,
        })
        .then((res) => {
          this.store.cardList = res.data.results;

          this.store.nextPageUrl = res.data.info.next;
          this.store.prevPageUrl = res.data.info.prev;

          this.store.nameList = this.store.cardList.map((item) => item.name);

          this.store.errorString = "";
          this.isError = false;
        })
        .catch(
          (error) => console.log(error),
          (this.store.errorString = "Error"),
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
    <Header
      @search="getParamsApi(this.store.apiUrl), (this.store.counterPage = 0)"
    /><br />
    <Main
      v-if="!this.isError"
      @nextPage="getParamsApi(this.store.nextPageUrl)"
      @prevPage="getParamsApi(this.store.prevPageUrl)"
    />
    <div v-else-if="this.isError" class="error">
      {{ this.store.errorString }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "./assets/scss/main.scss";

.wrapper {
  background-image: linear-gradient(to right, black, rgb(72, 143, 0), black);
  .error {
    height: 85vh;
    background-image: linear-gradient(to right, black, rgb(72, 143, 0), black);
    margin-top: 150px;
    color: greenyellow;
    font-size: 3rem;
    text-align: center;
  }
}
</style>
