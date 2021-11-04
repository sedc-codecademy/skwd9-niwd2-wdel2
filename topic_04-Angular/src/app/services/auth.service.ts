import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  userSubject$ = new Subject<any>(); // This is type UserCredential from firebase.

  registerWithEmailAndPassword(email: string, password: string) {
    this.http
      .post(`${environment.baseUrl}/auth/register`, { email, password })
      .subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['todos']);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  loginUser(email: string, password: string) {
    this.http
      .post(`${environment.baseUrl}/auth/login`, { email, password })
      .subscribe(
        (response) => {
          console.log(response);
          this.getCurrentUser();
          this.router.navigate(['todos']);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  logoutUser() {
    this.http.post(`${environment.baseUrl}/auth/logout`, {}).subscribe(() => {
      this.getCurrentUser();
      console.log('User logged out!');
    });
  }

  getCurrentUser() {
    this.http.get(`${environment.baseUrl}/auth/current`).subscribe(
      (user) => {
        this.userSubject$.next(user);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
