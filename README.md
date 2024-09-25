# Vue.js Project - Todolist & Pokemon Pages

### Try: [https://vuejs-todo-list-pokemon.netlify.app/](https://vuejs-todo-list-pokemon.netlify.app/)

This project is built using Vue.js and Tailwind CSS, providing a simple and interactive interface for managing tasks and exploring Pokémon. The project includes two main features:

- **Todolist**: A classic to-do list application to manage tasks efficiently.
- **Pokemon**: A Pokémon list page that allows users to explore Pokémon with infinite scrolling, view detailed information, and images fetched from the Pokémon API.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
- [Todolist](#todolist)
  - [Features](#features)
  - [Usage](#usage)
- [Pokemon](#pokemon)
  - [Features](#features-1)
  - [Usage](#usage-1)
- [Project Structure](#project-structure)
- [License](#license)

## Technologies Used

- **Vue.js**: Frontend JavaScript framework for building user interfaces.
- **Vue Router**: For navigation between pages.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **PokéAPI**: An open RESTful API for Pokémon data.

## Project Setup

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Run the project**:

   ```bash
   yarn serve
   ```

4. **Build the project for production**:

   ```bash
   yarn build
   ```

5. **Lint and fix files**:

   ```bash
   yarn lint
   ```

## Todolist

The Todolist page provides a simple task management interface, allowing users to add, edit, complete, and delete tasks.

### Features

- **Add Task**: Create new tasks with a title and description.
- **Edit Task**: Update existing tasks.
- **Complete Task**: Mark tasks as completed.
- **Delete Task**: Remove tasks from the list.
- **Responsive Design**: Built using Tailwind CSS for a modern and clean interface.

### Usage

1. Navigate to the Todolist page from the header navigation.
2. Add a task using the input form.
3. Edit or delete tasks using the corresponding buttons.
4. Mark tasks as completed by clicking the checkbox next to each task.

## Pokemon

The Pokemon page allows users to explore a list of Pokémon with infinite scrolling, view detailed information, and see images of each Pokémon.

### Features

- **Infinite Scroll**: Loads more Pokémon data as the user scrolls down.
- **Detailed View**: Click on a Pokémon to see detailed information including its image, height, weight, and abilities.
- **All Data Fetched Notification**: Displays a message when all Pokémon data has been loaded.
- **Responsive Design**: Styled with Tailwind CSS for a clean and accessible layout.

### Usage

1. Navigate to the Pokemon page from the header navigation.
2. Scroll down to load more Pokémon data.
3. Click on a Pokémon name to view detailed information and image.
4. The system will display a message when all Pokémon data is fetched.

### API Integration

- The Pokémon data is fetched using the [PokéAPI](https://pokeapi.co/).
- Requests are made using a limit of 40 Pokémon per fetch with infinite scrolling implemented via `IntersectionObserver`.

## Project Structure

```
├── public
│   ├── index.html          # Main HTML file
│
├── src
│   ├── assets              # Styles and assets
│   │   └── main.css        # Tailwind CSS styles
│   │
│   ├── components            # Vue components
│   │   ├── TodoList.vue      # Home/TodoList page component
│   │   ├── Pokemon.vue       # Pokémon list component
│   │   └── PokemonDetail.vue # Pokémon detail component
│   │
│   ├── router              # Router configuration
│   │   └── index.js        # Vue Router setup with routes
│   │
│   ├── App.vue             # Main App component with header navigation
│   ├── main.js             # Main entry point for Vue app
│   └── views               # Page view components
│       └── Todolist.vue    # Todolist page component
│
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
