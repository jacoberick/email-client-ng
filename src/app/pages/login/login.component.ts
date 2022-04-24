import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  underlineStyle: string = 'underline decoration-gray-400 decoration-2';

  loginForm = this.formBuilder.group({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService.handleSubmit(this.loginForm, 'login');
  }
}
