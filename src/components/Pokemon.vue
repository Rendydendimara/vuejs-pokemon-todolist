<!-- eslint-disable vue/multi-word-component-names -->
<!-- src/components/Pokemon.vue -->
<template>
  <div class="container mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4">Pokemon List</h2>
    <div v-if="error" class="text-red-500">{{ error }}</div>
    <ul
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      ref="pokemonList"
    >
      <li
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        class="bg-white p-4 rounded shadow flex flex-col items-center"
      >
        <router-link
          :to="{ name: 'PokemonDetail', params: { name: pokemon.name } }"
          class="font-semibold text-blue-500 hover:underline"
        >
          {{ pokemon.name }}
        </router-link>
      </li>
    </ul>
    <div v-if="loading" class="text-center mt-4">Loading more Pokémon...</div>
    <div v-if="allLoaded" class="text-center text-green-500 mt-4">
      All Pokémon have been loaded!
    </div>
    <div ref="loadMoreTrigger" class="h-2"></div> <!-- Invisible div to trigger loading more -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemons: [],
      loading: false,
      error: null,
      limit: 40,
      offset: 0,
      allLoaded: false,
      observer: null,
    };
  },
  mounted() {
    this.fetchPokemons();
    this.setupObserver();
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    async fetchPokemons() {
      if (this.allLoaded) return;

      this.loading = true;
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.offset}`
        );
        const data = await response.json();
        
        // If no new Pokémon were returned, we've loaded all Pokémon
        if (data.results.length === 0) {
          this.allLoaded = true;
        } else {
          this.pokemons.push(...data.results);
          this.offset += this.limit; // Increase the offset for the next fetch
        }
      } catch (error) {
        this.error = 'Failed to fetch Pokémon data';
      } finally {
        this.loading = false;
      }
    },
    setupObserver() {
      // Create an IntersectionObserver to detect when the user scrolls near the bottom
      this.observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting && !this.loading) {
            this.fetchPokemons();
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 1.0,
        }
      );

      // Observe the invisible load trigger element at the bottom of the list
      if (this.$refs.loadMoreTrigger) {
        this.observer.observe(this.$refs.loadMoreTrigger);
      }
    },
  },
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
