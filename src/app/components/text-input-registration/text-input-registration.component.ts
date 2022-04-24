import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-input-registration',
  templateUrl: './text-input-registration.component.html',
  styleUrls: ['./text-input-registration.component.css'],
})
export class TextInputRegistrationComponent implements OnInit {
  @Input() labelText!: string;
  @Input() name!: string;
  @Input() type: string = 'text';
  @Input() parentForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
