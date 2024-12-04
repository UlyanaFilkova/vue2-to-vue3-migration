<template>
  <div class="container">
    <h2 class="">My Todo List</h2>
    <div class="card">
      <div class="card-inner">
        <ul class="list-group">
          <li
            v-for="(todo, index) in todos"
            :key="index"
            class="list-group-item d-flex p-3"
          >
            <div class="flex-fill">{{ capitalize(todo) }}</div>

            <div class="list-item-delete">
              <button
                type="button"
                title="Delete"
                class="btn btn-danger"
                @click="removeTodo(index)"
              >
                X
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const todos = computed(() => store.getters.todos);

const removeTodo = (index) => {
  store.dispatch("removeTodo", index);
};

const capitalize = (value) => {
  if (!value) return "";
  return value.charAt(0).toUpperCase() + value.slice(1);
};
</script>
