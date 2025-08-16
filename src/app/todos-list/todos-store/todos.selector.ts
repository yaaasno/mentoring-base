import { createSelector } from "@ngrx/store";
import { Todo } from "../todo-create";

interface TodoState {
  todos: Todo[];
}

interface AppState {
  todos: TodoState;
}

export const selectTodosFeature = (state: AppState) => state.todos;

export const selectTodos = createSelector(
  selectTodosFeature,
  (state: TodoState) => state.todos
);
