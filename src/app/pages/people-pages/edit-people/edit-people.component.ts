import { Component, OnInit } from '@angular/core';
import { PeopleEditAddEnum } from 'src/app/enums/people-edit-add-enum';

@Component({
  selector: 'app-edit-people',
  templateUrl: './edit-people.component.html',
  styleUrls: ['./edit-people.component.css'],
})
export class EditPeopleComponent implements OnInit {
  editEnum: PeopleEditAddEnum = PeopleEditAddEnum.edit;

  constructor() {}

  ngOnInit(): void {}
}
