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
  contactId!: string;
  @Input() buttonText!: string;
  @Input() actionType!: PeopleEditAddEnum;
  editEnum: PeopleEditAddEnum = PeopleEditAddEnum.edit;
  addEnum: PeopleEditAddEnum = PeopleEditAddEnum.add;

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

  personForm = this.formBuilder.group({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

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
      : this.authService.handlePersonUpdate(this.personForm, this.contactId);
  }

  // function to retrieve contact data onInit
  async fetchPeopleData(): Promise<void> {
    const cont_id = this.contactId;
    await fetch(
      `http://localhost:3000/api/people/id?${new URLSearchParams({
        id: cont_id,
      })}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.personForm.setValue({
          first_name: data[0].first_name,
          last_name: data[0].last_name,
          email: data[0].email,
        });
      });
  }

  // if actionType is edit, pull selected contact info from api
  ngOnInit(): void {
    if (this.actionType == this.editEnum) {
      this.route.queryParams.subscribe((params) => {
        this.contactId = params['cont_id'];
      });
      this.fetchPeopleData();
    }
  }
}
