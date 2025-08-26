import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthCredentials } from './auth.action';
import { User } from '../users-list/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  login(credentials: AuthCredentials): Observable<User> {
    if (credentials.email === 'admin' && credentials.password === 'admin') {
      return of({
        id: 1,
        email: 'admin',
        isAdmin: true, name: 'Admin User',
        website: 'adminsite.com',
        company: { name: 'Admin Corp' }
      })
    } else {
      return of({
        id: 2,
        email: credentials.email,
        isAdmin: false,
        name: 'Regular User',
        website: 'usersite.com',
        company: { name: 'User Inc' }
      });
    }
  }
}
