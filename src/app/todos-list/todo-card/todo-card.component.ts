import { NgFor } from "@angular/common";
import { Component, Input, Output, EventEmitter, inject } from "@angular/core";
import { Todo } from "../todo-create";
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from "../modal-todo-dialog/modal-todo-dialog.component";
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
  standalone: true,
  imports: [NgFor, MatCardModule ]
})

export class TodoCardComponent {
  @Input()
  todo!: Todo;

  @Output()
  deleteTodo = new EventEmitter();

  readonly dialog = inject(MatDialog);

  onDeleteTodo(todoId: number) {
  const dialogRef = this.dialog.open(ConfirmDialogComponent);

  dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result, typeof result);
    if (result) {
      this.deleteTodo.emit(todoId)
    }
  })
  }
}
