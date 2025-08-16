import { createReducer, on } from "@ngrx/store";
import { TodosActions } from "./todos.actions";
import { Todo } from "../todo-create";

const initialState: { todos: Todo[] } = {
  todos: [],
}

export const todoReducer = createReducer(
  initialState,
  on(TodosActions.setTodos, (state, payload) => ({
    ...state,
    todos: payload.todos,
  })),
  on(TodosActions.editTodos, (state, payload: {todo: Todo} ) => ({
    ...state,
    todos: state.todos.map((todo) => {
      return todo.id === payload.todo.id ? payload.todo : todo
    }),
  })),
   on(TodosActions.createTodos, (state, payload) => ({
    ...state,
    todos: [...state.todos, payload.todo],
  })),
  on(TodosActions.deleteTodos, (state, payload: {id: number} ) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== payload.id),
  }))
);
