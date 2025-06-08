import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "./todos-list/todo-create";

@Injectable({providedIn: 'root'})
export class TodosService {
  todosSubject$ = new BehaviorSubject<Todo[]>([]);
  public todos$ = this.todosSubject$.asObservable();

  setTodos(todos: Todo[]) {
    this.todosSubject$.next(todos);
  }

  editTodos(editedTodo: Todo) {
    this.todosSubject$.next(
      this.todosSubject$.value.map(
        todo => {
          return todo.id === editedTodo.id ? editedTodo : todo
        }
      )
    )
  }

  createTodos(todo: Todo) {
    const exstingTodo = this.todosSubject$.value.find(
      currentElement => currentElement.userId === todo.userId
    );

    if (exstingTodo) {
      alert('ajidfvbnp;');
    } else {
      this.todosSubject$.next([...this.todosSubject$.value, todo])
      alert('sssssss');
    }
  }

  deleteTodos(id: number) {
    this.todosSubject$.next(
      this.todosSubject$.value.filter(
        todo => {
          return id === todo.id ? false : true
        }
      )
    )
  }
}
