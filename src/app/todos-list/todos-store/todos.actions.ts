import { createActionGroup, props } from "@ngrx/store";
import { Todo } from "../todo-create";

export const TodosActions = createActionGroup({
  source: 'Todos',
  events: {
    'setTodos': props<{ todos: Todo[] }>(),
    'editTodos': props<{ todo: Todo }>(),
    'createTodos': props<{ todo: Todo }>(),
    'deleteTodos': props<{ id: number }>()
  },
});
