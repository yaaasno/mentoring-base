import { Injectable } from "@angular/core";
import { User } from "./users-list/user";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class UsersService {

  private usersSubject$ = new BehaviorSubject<User[]>([]);
  public users$ = this.usersSubject$.asObservable();
  isAdmin: any;

  setUsers(users: User[]) {
    this.usersSubject$.next(users);
  }

  editUser(editedUser: User) {
    this.usersSubject$.next(
      this.usersSubject$.value.map(
        user => {
          return user.id === editedUser.id ? editedUser : user
        }
      )
    )
  }

  createUser(user: User) {
    const existingUser = this.usersSubject$.value.find(
      currentElement => currentElement.email === user.email
    );

    if (existingUser) {
      alert('ajidfvbnp;')
    } else {
      this.usersSubject$.next([...this.usersSubject$.value, user])
      alert('ssssss')
    }
  }

  deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter(
      user => {
          return id === user.id ? false : true
        }
      )
    )
  }
}
