import { AsyncPipe, DatePipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { ChangeDetectionStrategy } from "@angular/core";
import { TodosService } from '../todos.service';
import { Todo } from './todo-create';
import { createTodosFormComponent } from "../create-todos-form/create-todos-form.component";
import { forwardRef } from "@angular/core";

@Component ({
  selector: 'app-user-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  standalone: true,
  imports: [NgFor, TodoCardComponent, AsyncPipe, createTodosFormComponent, forwardRef(() => DatePipeComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoListComponent {
  readonly todosApiService = inject(TodosApiService)
  readonly todosService = inject(TodosService)

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

@Component({
  selector: 'date-pipe',
  styleUrl: './todos-list.component.scss',
  standalone: true,
  imports: [DatePipe],
  template: `<div class="date-pipe">
    <p>Дата {{today | date:'medium'}}</p>
  </div>`
})

export class DatePipeComponent {
  today: number = Date.now();
}
