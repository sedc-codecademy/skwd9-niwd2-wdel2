import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, AfterViewInit {
  constructor() {
    // console.log('constructor', this.isRegistered);
  }
  @ViewChild('registerForm') registerForm: NgForm;
  // isRegistered: boolean = false;

  ngOnInit(): void {
    // console.log(this.registerForm);
    // console.log('onInit', this.isRegistered);
  }

  ngAfterViewInit() {
    // console.log(this.registerForm);
  }

  onSubmitRegister() {
    const { email, password } = this.registerForm.value;
    console.log(email, password);
    
  }
}
