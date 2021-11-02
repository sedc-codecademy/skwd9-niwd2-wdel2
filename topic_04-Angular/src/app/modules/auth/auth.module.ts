import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from '../auth-routing/auth-routing.module';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [CommonModule, AuthRoutingModule, FormsModule],
})
export class AuthModule {}
