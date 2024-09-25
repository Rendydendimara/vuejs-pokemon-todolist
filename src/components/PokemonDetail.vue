<!-- src/components/PokemonDetail.vue -->
<template>
    <div class="container mx-auto p-4">
      <div v-if="loading" class="text-center">Loading...</div>
      <div v-if="error" class="text-red-500">{{ error }}</div>
      <div v-if="pokemon" class="bg-white p-6 rounded shadow">
        <h2 class="text-3xl font-bold mb-4 capitalize">{{ pokemon.name }}</h2>
        <img
          :src="pokemon.sprites.front_default"
          :alt="pokemon.name"
          class="w-32 h-32 mx-auto mb-4"
        />
        <p><strong>Height:</strong> {{ pokemon.height / 10 }} m</p>
        <p><strong>Weight:</strong> {{ pokemon.weight / 10 }} kg</p>
        <p><strong>Abilities:</strong></p>
        <ul class="list-disc ml-5">
          <li v-for="ability in pokemon.abilities" :key="ability.ability.name">
            {{ ability.ability.name }}
          </li>
        </ul>
        <router-link to="/pokemon" class="text-blue-500 hover:underline mt-4 inline-block">
          Back to list
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        pokemon: null,
        loading: false,
        error: null,
      };
    },
    mounted() {
      this.fetchPokemonDetail();
    },
    methods: {
      async fetchPokemonDetail() {
        this.loading = true;
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.name}`);
          this.pokemon = await response.json();
        } catch (error) {
          this.error = 'Failed to fetch Pokemon details';
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any specific styles for the detail page if needed */
  </style>
  