import axios from "axios";

const client = axios.create({
  baseURL: "https://camiestas-futbol.effectstudios.co/api/v1",
});

export { client };
