import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


export interface IUser {
  name: string;
  email: string;
  isAdmin: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private readonly userSubject$ = new BehaviorSubject<IUser | null>(null)
  public readonly user$ = this.userSubject$.asObservable()

  private user: IUser = {
    name: 'Влад',
    email: 'vlad@gmail.com',
    isAdmin: false
  }

  loginAsAdmin(): void {
    this.userSubject$.next({...this.user, isAdmin: true});
  }

  loginUser(): void {
    this.userSubject$.next({...this.user, isAdmin: false});
  }

  get isAdmin(): boolean {
    return this.userSubject$.value?.isAdmin === true;
  }

  logout() {
    this.userSubject$.next(null);
  }
}
