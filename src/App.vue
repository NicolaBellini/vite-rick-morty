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
      resultInfo:[]

    };
  },
  methods: {
    getApi() {
      axios.get(this.store.apiUrl)
        .then((res) => {
          console.log("nella function", res.data.results);
          this.resultInfo=res.data.results;
          console.log('resultInfo',this.resultInfo);
          
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
  <Header /><br />
  <Main />
</template>

<style lang="scss" scoped>
@use "./assets/scss/main.scss";
</style>
