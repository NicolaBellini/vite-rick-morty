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
    <img :src="cardImage" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        {{}}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
