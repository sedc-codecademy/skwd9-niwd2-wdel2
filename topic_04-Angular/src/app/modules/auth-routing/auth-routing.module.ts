import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from 'src/app/components/register/register.component';

const routes: Routes = [
  // http://localhost:4200/auth/login
  {
    path: 'login',
    component: LoginComponent,
  },
  // http://localhost:4200/auth/register
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
