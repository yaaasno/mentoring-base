import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface IUser {
  name: string;
  email: string;
  isAdmin: boolean | null;
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private readonly userSubject$ = new BehaviorSubject<IUser | null>(null)
  public readonly user$ = this.userSubject$.asObservable()

  private user: IUser = {
    name: 'Влад',
    email: 'Путин',
    isAdmin: null
  }

  loginAsAdmin() {
    this.userSubject$.next({...this.user, isAdmin: true});
  }

  loginUser() {
    this.userSubject$.next({...this.user, isAdmin: false});
  }

  get isAdmin() {
    return this.userSubject$.value?.isAdmin
  }

  logout() {
    this.userSubject$.next(null);
  }
}
