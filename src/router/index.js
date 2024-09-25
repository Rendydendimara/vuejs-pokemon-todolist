// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/TodoList.vue";
import Pokemon from "../components/Pokemon.vue";
import PokemonDetail from "../components/PokemonDetail.vue"; // Import the new component

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pokemon",
    name: "Pokemon",
    component: Pokemon,
  },
  {
    path: "/pokemon/:name",
    name: "PokemonDetail",
    component: PokemonDetail,
    props: true,
  }, // Add detail route
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
