import { AsyncPipe, formatDate, NgFor } from "@angular/common";
import { Component, inject } from "@angular/core";
import { UsersApiService } from "../users-api.servise";
import { UserCardComponent } from "./user-card/user-card.component";
import { ChangeDetectionStrategy } from "@angular/core";
import { UsersService } from "../users.service";
import { User } from "./user";
import { companyUser } from "./company-user";
import { createUserFormComponent } from "../create-user-form/create-user-form.component";

@Component ({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe, createUserFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersListComponent {
  readonly usersApiServise = inject(UsersApiService);
  readonly usersService = inject(UsersService);

  constructor () {
    this.usersApiServise.getUsers().subscribe(
      (response: User[]) => {
        this.usersService.setUsers(response);
      }
    )
    this.usersService.users$.subscribe()
  }

  public editUser(formDialogValue: User) {
    this.usersService.editUser({
      ...formDialogValue
    })
  }


  public createUser(user: companyUser) {
    this.usersService.createUser({
      id: new Date().getTime(),
      name: user.name,
      email: user.email,
      website: user.website,
      company: {
        name: user.company.name
      }
    })
  }

  deleteUser (id: number) {
    this.usersService.deleteUser(id)
  }
}
