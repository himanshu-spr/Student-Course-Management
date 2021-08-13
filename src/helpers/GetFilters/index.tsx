import axios from "axios";

export const getFilters = async () => {
  return axios
    .get("http://localhost:3000/filters.json")
    .then((res) => res.data);
};
