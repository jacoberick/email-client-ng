import { Component, Input, OnInit } from '@angular/core';

interface peopleInput {
  labelText: string;
  name: string;
  placeholderText: string;
}

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.css'],
})
export class PeopleFormComponent implements OnInit {
  @Input() buttonText!: string;
  inputInfoArray: Array<peopleInput> = [
    {
      labelText: 'First Name',
      name: 'fname',
      placeholderText: '',
    },
    {
      labelText: 'Last Name',
      name: 'lname',
      placeholderText: '',
    },
    {
      labelText: 'Email',
      name: 'email',
      placeholderText: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
