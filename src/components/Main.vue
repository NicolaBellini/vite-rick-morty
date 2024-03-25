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
    <div class="row row-cols-3">
      <div class="col">
        <Card
          v-for="card in store.cardList"
          :key="card.id"
          :cardName="card.name"
          :cardStatus="card.status"
          :cardGender="card.gender"
          :cardSpecies="card.species"
          :cardImage="card.image"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
