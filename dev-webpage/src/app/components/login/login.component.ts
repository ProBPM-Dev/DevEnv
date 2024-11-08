import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone:true,
  imports: [
    CardModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ButtonModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login = {
    email: '',
    password: '',
  };


  onLogin() {
  console.log(this.login);
  }
}