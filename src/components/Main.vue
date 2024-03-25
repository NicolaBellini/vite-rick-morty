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

<template>
  <div class="wrapper d-flex">
    <div class="container d-flex flex-around">
      <div class="row row-cols-3 d-flex">
        <Card
          class="col m-3 mb-5"
          v-for="card in store.cardList"
          :key="card.id"
          :cardName="card.name"
          :cardStatus="card.status"
          :cardGender="card.gender"
          :cardSpecies="card.species"
          :cardImage="card.image"
          :cardLocation="card.location.name"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.row {
  justify-content: center;
}
</style>
