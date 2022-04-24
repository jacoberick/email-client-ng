import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-black-button',
  templateUrl: './black-button.component.html',
  styleUrls: ['./black-button.component.css'],
})
export class BlackButtonComponent implements OnInit {
  @Input() buttonText!: string;
  @Input() disabled: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
