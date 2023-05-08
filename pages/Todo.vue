<template>
  <div>
    <div class="header">
      <h4>My Website</h4>
      <p>A website created by me.</p>
    </div>
    <Navbar />
    <h2 style="color: white;">About Me</h2>
    <h5 style="color: white;">Photo of me:</h5>
    <div class="flex">
      <div class="max-w-md w-full mx-auto mt-8 mr-4">
        <div class="flex justify-center">
          <h1 class="text-3xl font-extrabold mb-4">Add Activity</h1>
        </div>
        <div class="mb-6">
          <input
            v-model="newTodo" type="text" class="
            shadow-sm
            bg-gray-50
            border border-gray-300
            text-gray-900 text-sm
            rounded-lg
            focus:ring-blue-500 focus:border-blue-500
            block
            w-full
            p-2.5
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
            dark:shadow-sm-light
          " placeholder="Add a new task" required />
        </div>
        <div class="mb-6">
          <input
            v-model="newDate" type="datetime-local" class="
            shadow-sm
            bg-gray-50
            border border-gray-300
            text-gray-900 text-sm
            rounded-lg
            focus:ring-blue-500 focus:border-blue-500
            block
            w-full
            p-2.5
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
            dark:shadow-sm-light
          " placeholder="Select Date and Time" required />
        </div>
        <button
          type="button" class="
          text-white
          bg-blue-700
          hover:bg-blue-800
          focus:ring-4 focus:outline-none focus:ring-blue-300
          font-medium
          rounded-lg
          text-sm
          px-5
          py-2.5
          text-center
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
        " @click="addTodo"> Add </button>
      </div>
      <div class="max-w-md w-full mx-auto mt-8 mr-4">
        <h1 class="text-3xl font-extrabold mb-4">My Activities</h1>
        <ul class="list-group">
          <li v-for="(todo, index) in todos" :key="index" class="list-group-item">
            {{ todo.task }} - {{ todo.date }}
            <button type="button" class="close" aria-label="Close" @click="removeTodo(index)">
              <span aria-hidden="true">&times;</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        newTodo: '',
        newDate: '',
        todos: []
      }
    },
    watch: {
      todos: {
        handler: function() {
          this.saveTodos()
        },
        deep: true
      }
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim() !== '') {
          this.todos.push({
            task: this.newTodo.trim(),
            date: this.newDate
          })
          this.newTodo = ''
          this.newDate = ''
        }
      },
      removeTodo(index) {
        this.todos.splice(index, 1)
      },
      saveTodos() {
        fetch('http://localhost:1337/api/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.todos)
        }).then(response => {
          // eslint-disable-next-line no-console
          console.log('Todos saved successfully')
        }).catch(error => {
          // eslint-disable-next-line no-console
          console.error('Error saving todos:', error)
        })
      }
    }
  }
</script>
<style>
  .flex {
    display: flex;
    justify-content: center;
  }

  #todo-list-container {
    margin-top: 16px;
    width: 50%;
  }

  @media (max-width: 768px) {
    .flex {
      flex-direction: column;
      align-items: center;
    }

    #todo-list-container {
      width: 100%;
      margin-top: 32px;
    }
  }

  .my-heading {
    font-size: 3rem;
  }

  .header1 {
    padding: 80px;
    text-align: center;
    background: #1abc9c;
    color: white;
  }

  /* Increase the font size of the heading */
  .header h4 {
    font-size: 40px;
  }
</style>