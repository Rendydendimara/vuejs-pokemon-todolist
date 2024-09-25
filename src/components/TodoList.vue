<!-- src/components/TodoList.vue -->
<template>
    <div class="container mx-auto p-4 max-w-md">
      <h1 class="text-2xl font-bold mb-4 text-center">To-Do List</h1>
      <div class="mb-4 flex">
        <input
          v-model="newTask"
          type="text"
          class="border rounded w-full py-2 px-3 text-gray-700 mr-2"
          placeholder="Add a new task"
          @keyup.enter="addTask"
        />
        <button
          @click="addTask"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul>
        <li
          v-for="(task, index) in tasks"
          :key="index"
          class="flex items-center justify-between mb-2 bg-white p-2 rounded shadow"
        >
          <span
            :class="{ 'line-through text-gray-400': task.completed }"
            class="cursor-pointer"
            @click="toggleTask(index)"
          >
            {{ task.text }}
          </span>
          <button
            @click="deleteTask(index)"
            class="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTask: '',
        tasks: [],
      };
    },
    methods: {
      addTask() {
        if (this.newTask.trim() !== '') {
          this.tasks.push({ text: this.newTask, completed: false });
          this.newTask = '';
        }
      },
      deleteTask(index) {
        this.tasks.splice(index, 1);
      },
      toggleTask(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Additional styles can be added here if needed */
  </style>
  