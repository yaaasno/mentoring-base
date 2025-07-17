import { Component, Input, Output, EventEmitter, inject } from "@angular/core";
import { User } from '../user';
import { CustomUpperCasePipe } from '../../user-pipes/upper-case.pipe';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { RemoveDashesPipe } from "../../user-pipes/removing-dashes.pipe";
import { RedDirective } from "../../directives/red.directive";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  standalone: true,
  imports: [ CustomUpperCasePipe, RemoveDashesPipe, RedDirective, MatButtonModule ]
})

export class UserCardComponent {
  @Input()
  user!: User;

  @Output()
  deleteUser = new EventEmitter<number>();

  @Output()
  editUser = new EventEmitter<User>();

  readonly dialog = inject(MatDialog);

   openDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: { user: this.user }
    })

    dialogRef.afterClosed().subscribe((editResult: User) => {
      if (editResult) {
        this.editUser.emit(editResult);
      }
    })
  }

  onDeleteUser(userId: number) {
    this.deleteUser.emit(userId)
  }
}
