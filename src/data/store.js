import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://rickandmortyapi.com/api/character",
  cardList: [],
  nameList: [],
  speciesList: [],
  statusList: [],
  queryParams: {
    name: "",
    status: "",
    species: "",
  },
  errorString: "",
});
