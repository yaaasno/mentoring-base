import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  templateUrl: './modal-todo-dialog.component.html',
  imports: [ MatDialogModule, MatSnackBarModule ]
})

export class ConfirmDialogComponent {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.open('Действие выполнено', 'Закрыть', { duration: 2000 });
  }
}
