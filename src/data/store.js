import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://rickandmortyapi.com/api/character",
  nextPageUrl: "",
  prevPageUrl: "",
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
  counterPage: 0,
  pageNumber: 0,
});
