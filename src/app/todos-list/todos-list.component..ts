import { AsyncPipe, DatePipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { ChangeDetectionStrategy } from "@angular/core";
import { TodosService } from '../todos.service';
import { Todo } from './todo-create';
import { createTodosFormComponent } from "../create-todos-form/create-todos-form.component";
import { YellowDirective } from '../directives/yellow.directive';

@Component ({
  selector: 'app-user-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  standalone: true,
  imports: [ NgFor, TodoCardComponent, AsyncPipe, createTodosFormComponent, DatePipe, YellowDirective ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoListComponent {
  readonly todosApiService = inject(TodosApiService)
  readonly todosService = inject(TodosService)

  today: number = Date.now();

  constructor () {
    this.todosApiService.getTodos().subscribe(
      (response: Todo[]) => {
        this.todosService.setTodos(response);
      }
    )
    this.todosService.todos$.subscribe()
  }

  public createTodo(formData: Todo) {
    this.todosService.createTodos({
      id: new Date().getTime(),
      userId: formData.userId,
      title: formData.title,
      completed: formData.completed,
      phone: formData.phone
    })
  }

  deleteTodo(id: number) {
    this.todosService.deleteTodos(id)
  }
}
