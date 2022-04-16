import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  underlineStyle: string = 'underline decoration-gray-400 decoration-2';

  constructor() {}

  ngOnInit(): void {}
}
