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
  mounted() {},
};
</script>

<!-- :status:String,
    :gender:string,
    :species:string,
    :image:string, -->

<template>
  <div class="container">
    <Card v-for="card in store.cardList" :key="card.id" :cardName="card.name" />
  </div>
</template>

<style lang="scss" scoped></style>
