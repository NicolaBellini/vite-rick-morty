<script>
import { store } from "../data/store";
import Card from "./partials/Card.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: {
    Card,
  },
  mounted() {
    console.log("main", this.store.cardLIst);
  },
};
</script>

<!-- :status:String,
    :gender:string,
    :species:string,
    :image:string, -->

<template>
  <div class="container">
    <!-- <Card class="" :name="this.store.cardList[0].name" /> -->
  </div>
</template>

<style lang="scss" scoped></style>
