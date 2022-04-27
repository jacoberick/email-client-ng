import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { PeopleEditAddEnum } from '../../enums/people-edit-add-enum';
import { ActivatedRoute } from '@angular/router';

interface peopleInput {
  labelText: string;
  name: string;
}

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.css'],
})
export class PeopleFormComponent implements OnInit {
  editEnum: PeopleEditAddEnum = PeopleEditAddEnum.edit;
  addEnum: PeopleEditAddEnum = PeopleEditAddEnum.add;
  @Input() buttonText!: string;
  @Input() actionType!: PeopleEditAddEnum;
  @Input() contactInfo?: any;

  // when contactInfo is updated from parent, fill in form values
  ngOnChanges() {
    if (this.actionType == this.editEnum)
      this.personForm.setValue({
        first_name: this.contactInfo.first_name ?? '',
        last_name: this.contactInfo.last_name ?? '',
        email: this.contactInfo.email ?? '',
      });
  }

  // controllers for person inputs
  personForm = this.formBuilder.group({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
  });

  // array to build inputs from
  inputInfoArray: Array<peopleInput> = [
    {
      labelText: 'First Name',
      name: 'first_name',
    },
    {
      labelText: 'Last Name',
      name: 'last_name',
    },
    {
      labelText: 'Email',
      name: 'email',
    },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  // fixes cursor at the beginning of text bug
  onInputClick(e: MouseEvent) {
    let input = e.target! as HTMLInputElement;
    let lengthOfText = input.value.length;
    input.setSelectionRange(lengthOfText, lengthOfText);
  }

  // conditionally returns correct submit function dependent on actionType
  onSubmit() {
    let user_id = this.authService.getUserId();
    let created_at = new Date().toLocaleDateString();

    this.actionType == this.addEnum
      ? this.authService.handlePeopleSubmit(
          this.personForm,
          user_id,
          '/people/add',
          created_at
        )
      : this.authService.handlePersonUpdate(
          this.personForm,
          this.contactInfo.id
        );
  }

  ngOnInit(): void {}
}
