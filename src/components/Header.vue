<script>
import { store } from "../data/store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="wrapper-header">
    <div class="container">
      <nav class="navbar bg-dark border-bottom border-body">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
              src="https://pendragongamestudio.com/it/wp-content/uploads/sites/2/2019/05/0wzY6AgU.png"
              alt="Rick&Morty"
              width="110px"
              height="50px"
            />
          </a>
          <form class="d-flex" role="search">
            <select
              class="form-select"
              aria-label="Default select example"
              @change="
                console.log('Vecchio species:', this.store.queryParams.species),
                  (this.store.queryParams.species = $event.target.value),
                  console.log('Nuovo status:', this.store.queryParams.species),
                  $emit('search')
              "
            >
              <option value="" selected>Status</option>
              <option
                v-for="(item, index) in this.store.speciesList"
                :key="index"
                :value="item"
              >
                {{ item }}
              </option>
            </select>
            <!-- INPUT STATUS -->
            <select
              class="form-select"
              aria-label="Default select example"
              @change="
                console.log('Vecchio status:', this.store.queryParams.status),
                  (this.store.queryParams.status = $event.target.value),
                  console.log('Nuovo status:', this.store.queryParams.status),
                  $emit('search')
              "
            >
              <option value="" selected>Status</option>
              <option
                v-for="(item, index) in this.store.statusList"
                :key="index"
                :value="item"
              >
                {{ item }}
              </option>
            </select>

            <!-- INPUT NOME -->
            <input
              class="form-control me-2"
              type="search"
              placeholder="Ricerca per nome"
              aria-label="Search"
              v-model="this.store.queryParams.name"
              @keyup="$emit('search')"
            />
          </form>
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper-header {
  position: fixed;
  z-index: 99999;
  width: 100%;
  background-color: #212529;
}
</style>
