import { AsyncPipe, formatDate, NgFor } from "@angular/common";
import { Component, inject } from "@angular/core";
import { UsersApiService } from "../users-api.servise";
import { UserCardComponent } from "./user-card/user-card.component";
import { ChangeDetectionStrategy } from "@angular/core";
import { UsersService } from "../users.service";
import { User } from "./user";
import { companyUser } from "./company-user";
import { createUserFormComponent } from "../create-user-form/create-user-form.component";
import { Store } from "@ngrx/store";
import { UsersActions } from "./user-store/users.actions";
import { selectUsers } from "./user-store/users.selector";

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
  private readonly store = inject(Store);
  public readonly users$ = this.store.select(selectUsers);

  constructor () {
    this.usersApiServise.getUsers().subscribe(
      (response: User[]) => {
        this.usersService.setUsers(response);
        this.store.dispatch(UsersActions.setUsers({ users: response }));
      }
    )
    this.usersService.users$.subscribe()
  }

  public editUser(formDialogValue: User) {
    this.usersService.editUser({
      ...formDialogValue
    })
    this.store.dispatch(UsersActions.editUser({ user: formDialogValue }));
  }

  deleteUser (id: number) {
    this.usersService.deleteUser(id);
    this.store.dispatch(UsersActions.deleteUser({ id }));
  }

  public createUser(user: companyUser) {
    this.usersService.createUser({
      id: new Date().getTime(),
      name: user.name,
      email: user.email,
      website: user.website,
      company: {
        name: user.company.name
      },
      phone: user.phone
    });
    this.store.dispatch(UsersActions.createUser({ user: {
      id: new Date().getTime(),
      name: user.name,
      email: user.email,
      website: user.website,
      company: {
        name: user.company.name
      },
      phone: user.phone
    }}));
  }
}
export { User };
