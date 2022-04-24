import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  // dummy data to simulate database for now
  peopleInfoArr: Array<any> = [
    {
      name: 'John Doe',
      email: 'johnnyboy@readybase.com',
      dateAdded: 'Added 5/3/2019',
      subscribed: true,
    },
    {
      name: 'Kate White',
      email: 'katelyn@readybase.com',
      dateAdded: 'Added 7/23/2021',
      subscribed: true,
    },
    {
      name: 'Luke Skywalka',
      email: 'bluelightsaber@readybase.com',
      dateAdded: 'Added 10/4/2019',
      subscribed: false,
    },
  ];

  // list to render subscriber elements from
  filteredPeopleList: Array<any> = [...this.peopleInfoArr];

  numOfSubs: Number = this.peopleInfoArr.filter((person) => person.subscribed)
    .length;

  constructor() {}

  filterPeopleArr(event: KeyboardEvent) {
    let searchText = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredPeopleList = this.peopleInfoArr.filter(
      (person) =>
        person.name.toLowerCase().includes(searchText) ||
        person.email.toLowerCase().includes(searchText)
    );
  }

  ngOnInit(): void {}
}
