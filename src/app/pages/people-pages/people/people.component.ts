import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  // stores original people data
  peopleInfoArr: Array<any> = [];

  // list to render/filter people elements from
  filteredPeopleList: Array<any> = [...this.peopleInfoArr];

  numOfSubs!: Number;

  constructor(public authService: AuthService) {}

  filterPeopleArr(event: KeyboardEvent) {
    let searchText = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredPeopleList = this.peopleInfoArr.filter(
      (person) =>
        person.first_name.toLowerCase().includes(searchText) ||
        person.last_name.toLowerCase().includes(searchText) ||
        person.email.toLowerCase().includes(searchText)
    );
  }

  // function to retrieve people data onInit
  async fetchPeopleData(): Promise<void> {
    const user_id = this.authService.getUserId();
    await fetch(
      `http://localhost:3000/api/people?${new URLSearchParams({
        id: user_id,
      })}`,
      {}
    )
      .then((res) => res.json())
      .then((data) => (this.peopleInfoArr = data));

    // set filtered arr to new people data
    this.filteredPeopleList = [...this.peopleInfoArr];

    // finds number of people subscribed and sets variable
    this.numOfSubs = this.peopleInfoArr.filter(
      (person) => person.is_subscribed
    ).length;
  }

  ngOnInit(): void {
    this.fetchPeopleData();
  }
}
