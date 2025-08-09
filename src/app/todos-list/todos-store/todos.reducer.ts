import { createReducer, on } from "@ngrx/store";
import { TodosActions } from "./todos.actions";
import { Todo } from "../../todos-list/todos-list.component.";

const initialState: { todos: Todo[] } = {
  todos: [],
}

export const todoReducer = createReducer(
  initialState,
  on(TodosActions.setTodos, (state, payload) => ({
    ...state,
    todos: payload.todos,
})),
  on(TodosActions.editTodos, (state, payload) => ({
    ...state,
    todos: state.todos.map((todo) => {
      if (todo.id === payload.todo.id) {
        return payload.todo;
      } else {
        return todo;
      }
    }),
  })),
   on(TodosActions.createTodos, (state, payload) => ({
    ...state,
    todos: [...state.todos, payload.todo],
})),
  on(TodosActions.deleteTodos, (state, payload) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== payload.id),
  }))
);
