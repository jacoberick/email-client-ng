import { Component, OnInit } from '@angular/core';
import { PeopleEditAddEnum } from '../../../enums/people-edit-add-enum';

@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css'],
})
export class AddPeopleComponent implements OnInit {
  addEnum: PeopleEditAddEnum = PeopleEditAddEnum.add;

  constructor() {}

  ngOnInit(): void {}
}
