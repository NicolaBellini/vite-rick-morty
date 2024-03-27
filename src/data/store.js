import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://rickandmortyapi.com/api/character",
  cardList: [],
  nameList: [],
  statusList: ["alive", "unknown", "dead"],
  queryParams: {
    name: "",
    status: "",
  },
  errorString: "",
});
