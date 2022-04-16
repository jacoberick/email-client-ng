import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  underlineStyle: string = 'underline decoration-gray-400 decoration-2';
  constructor() {}

  ngOnInit(): void {}
}
