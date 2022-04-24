import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  underlineStyle: string = 'underline decoration-gray-400 decoration-2';

  signupForm = this.formBuilder.group({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  tosChecked: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  handleTosChecked() {
    this.tosChecked = !this.tosChecked;
  }

  onSubmit() {
    this.authService.handleSubmit(this.signupForm, 'signup');
  }
}
