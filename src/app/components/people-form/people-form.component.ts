import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { PeopleEditAddEnum } from '../../enums/people-edit-add-enum';

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
  @Input() actionType!: PeopleEditAddEnum;
  editEnum: PeopleEditAddEnum = PeopleEditAddEnum.edit;
  addEnum: PeopleEditAddEnum = PeopleEditAddEnum.add;

  personForm = this.formBuilder.group({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
  });

  inputInfoArray: Array<peopleInput> = [
    {
      labelText: 'First Name',
      name: 'first_name',
      placeholderText: '',
    },
    {
      labelText: 'Last Name',
      name: 'last_name',
      placeholderText: '',
    },
    {
      labelText: 'Email',
      name: 'email',
      placeholderText: '',
    },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  onSubmit() {
    let user_id = this.authService.getUserId();
    let created_at = new Date().toLocaleDateString();
    this.authService.handlePeopleSubmit(
      this.personForm,
      user_id,
      '/people/add',
      created_at
    );
  }

  ngOnInit(): void {}
}
