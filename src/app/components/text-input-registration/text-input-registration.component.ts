import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input-registration',
  templateUrl: './text-input-registration.component.html',
  styleUrls: ['./text-input-registration.component.css'],
})
export class TextInputRegistrationComponent implements OnInit {
  @Input() labelText!: string;
  @Input() name!: string;
  @Input() type: string = 'text';

  constructor() {}

  ngOnInit(): void {}
}
