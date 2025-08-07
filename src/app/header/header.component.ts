import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from '../auth/auth.component';
import { RouterLink } from '@angular/router';
import { UsersService } from '../admin.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component ({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [RouterLink, NgIf, AsyncPipe],
})

export class AdminComponent {
  private readonly dialog = inject(MatDialog)
  public readonly userService = inject(UsersService);

  openDialog(): void {
    const dialogRef = this.dialog.open(AuthComponent, {
      width: '400px',
      height: '200px'
    })

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result === 'admin') {
        this.userService.loginAsAdmin();
      } else if (result === 'user') {
        this.userService.loginUser();
      } else return undefined;
    })
  }

  public logout(): void | false {
    const isConfirmed = confirm('Вы уверены, что хотите выйти?');
    return isConfirmed ? this.userService.logout() : false;
  }
}
