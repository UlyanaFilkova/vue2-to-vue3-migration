<template>
  <div class="container">
    <h2 class="">Add Todo</h2>
    <div class="card">
      <div class="d-flex">
        <input
          v-model="newTodo"
          placeholder="Add new todo"
          class="form-control"
        />
        <button
          type="button"
          class="btn btn-primary"
          @click="addNewTodo"
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const newTodo = ref("");

const addNewTodo = () => {
  store.dispatch("addTodo", newTodo.value);
  newTodo.value = "";
};
</script>
