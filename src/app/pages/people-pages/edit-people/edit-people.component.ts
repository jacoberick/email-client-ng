import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleEditAddEnum } from 'src/app/enums/people-edit-add-enum';

@Component({
  selector: 'app-edit-people',
  templateUrl: './edit-people.component.html',
  styleUrls: ['./edit-people.component.css'],
})
export class EditPeopleComponent implements OnInit {
  editEnum: PeopleEditAddEnum = PeopleEditAddEnum.edit;
  contactId!: string;
  contactInfo: any = {
    first_name: '',
    last_name: '',
  };

  constructor(private route: ActivatedRoute) {}

  async fetchPeopleData(): Promise<void> {
    const cont_id = this.contactId;
    await fetch(
      `http://localhost:3000/api/people/id?${new URLSearchParams({
        id: cont_id,
      })}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.contactInfo = data[0];
      });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.contactId = params['cont_id'];
    });
    this.fetchPeopleData();
  }
}
