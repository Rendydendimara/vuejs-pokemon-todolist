<!-- src/App.vue
<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <TodoList />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoList,
  },
};
</script>

<style>
/* Global styles if necessary */
</style> -->
<!-- src/App.vue -->
<template>
  <div>
    <header class="bg-blue-600 text-white p-4">
      <nav class="container mx-auto flex justify-between">
        <a href="/" class="text-xl font-bold">Home</a>
        <a href="/pokemon" class="text-xl font-bold">Pokemon</a>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Add any global styles if necessary */
</style>
