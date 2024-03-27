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
    <div class="container d-flex flex-column">
      <div class="row row-cols-4 d-flex">
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
          :cardId="card.id"
        />
      </div>
      <div class="my_buttons d-flex">
        <button
          v-if="this.store.counterPage < this.store.pageNumber"
          class="btn btn-outline-light m-5"
          @click="
            $emit('nextPage'),
              this.store.counterPage++,
              console.log(this.store.counterPage)
          "
        >
          next
        </button>
        <button
          v-show="this.store.counterPage > 0"
          class="btn btn-outline-light m-5"
          @click="$emit('prevPage'), this.store.counterPage--"
        >
          prev
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  margin-top: 80px;
  height: 100%;
  .container {
    justify-content: center;
    .row {
      justify-content: center;
    }
    .my_buttons {
      justify-content: center;
    }
  }
}
</style>
