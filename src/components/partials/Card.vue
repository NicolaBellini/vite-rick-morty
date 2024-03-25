<script>
export default {
  props: {
    cardName: String,
    cardStatus: String,
    cardGender: String,
    cardSpecies: String,
    cardImage: String,
  },
};
</script>

<template>
  <div class="card" style="width: 18rem">
    <img :src="cardImage" class="card-img-top" :alt="cardName" />
    <div class="card-body">
      <h5 class="card-title">{{ cardName }}</h5>
      <p class="card-text">{{ cardStatus }}</p>
      <p class="card-text">{{ cardGender }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
