import axios from "axios";

export const getFilters = async () => {
  let data;
  try {
    const res = await axios.get("http://localhost:3000/filters.json");
    data = res.data;
  } catch (err) {
    alert(err);
  }

  return data;
};
