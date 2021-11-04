import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  currentUser: any;
  userSubscription: Subscription;

  ngOnInit(): void {
    this.initSubscriptions();
    this.authService.getCurrentUser();
  }

  initSubscriptions() {
    this.authService.userSubject$.subscribe((user) => {
      this.currentUser = user;
    });
  }

  onLogoutUser() {
    this.authService.logoutUser();
  }
}
