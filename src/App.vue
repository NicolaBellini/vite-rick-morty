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
      this.store.statusList = [];
      axios
        .get(this.store.apiUrl, {
          params: this.store.queryParams,
        })
        .then((res) => {
          this.store.cardList = res.data.results;
          console.log("nello store", this.store.cardList[0].status);
          this.store.nameList = this.store.cardList.map((item) => item.name);
          this.store.cardList.forEach((item) => {
            if (!this.store.statusList.includes(item.status)) {
              this.store.statusList.push(item.status);
            }
          });
          console.log(this.store.statusList);

          this.store.errorString = "";
          this.isError = false;
          this.store.queryParams.name = "";
        })
        .catch(
          (error) => console.log(error),
          (this.store.errorString =
            "Non ci sono persone con quel nome in questo universo!!"),
          (this.isError = true),
          (this.store.queryParams.name = "")
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
    <Main v-if="!this.isError" />
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
