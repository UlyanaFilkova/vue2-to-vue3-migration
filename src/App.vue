<template>
  <div>
    <h1>To-Do App</h1>
    <hr />
    <AddTodo />
    <hr />
    <TodoList />
  </div>
</template>

<script setup>
import TodoList from "./components/TodoList.vue";
import AddTodo from "./components/AddTodo.vue";
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
