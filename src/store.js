import { createStore } from "vuex";

const store = createStore({
  state: {
    todos: ["demo todo"],
  },
  mutations: {
    addTodo(state, newTodo) {
      state.todos.push(newTodo);
    },
    removeTodo(state, index) {
      state.todos.splice(index, 1);
    },
  },
  actions: {
    addTodo({ commit }, newTodo) {
      commit("addTodo", newTodo);
    },
    removeTodo({ commit }, index) {
      commit("removeTodo", index);
    },
  },
});

export default store;
