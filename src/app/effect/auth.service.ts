import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  login(credentials: { email: string; password: string }): Observable<any> {
    if (credentials.email === 'admin' && credentials.password === 'admin') {
      return of({ id: 1, email: 'admin', isAdmin: true });
    } else {
      return of({ id: 2, email: credentials.email, isAdmin: false });
    }
  }
}
