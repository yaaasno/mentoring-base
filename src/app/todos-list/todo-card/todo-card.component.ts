import { Component, Input, Output, EventEmitter, inject } from "@angular/core";
import { Todo } from "../todo-create";
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from "../modal-todo-dialog/modal-todo-dialog.component";
import { MatCardModule } from '@angular/material/card';
import { CustomLimitPipe } from '../../todo-pipe/limit.pipe';
import { PhoneDashRemovePipe } from '../../todo-pipe/phone-dash-remove.pipe';

@Component ({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
  standalone: true,
  imports: [MatCardModule, CustomLimitPipe, PhoneDashRemovePipe]
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
      if (result) {
        this.deleteTodo.emit(todoId)
      }
    })
  }

  showPhone(): void {}
}
