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
    console.log(this.store.cardLIst);
  },
};
</script>
<!-- :name:this.s,
    :status:String,
    :gender:string,
    :species:string,
    :image:string, -->

<template>
  <div class="container">
    <Card class="" />
  </div>
</template>

<style lang="scss" scoped></style>
