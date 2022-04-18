import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';

interface sidebarObject {
  icon: string;
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  currentRoute!: any;

  sidebarInfoArr: Array<sidebarObject> = [
    {
      icon: '../../assets/sidebar-icons/broadcasts-icon.png',
      text: 'Broadcasts',
      route: '/broadcasts',
    },
    {
      icon: '../../assets/sidebar-icons/responses-icon.png',
      text: 'Responses',
      route: '/responses',
    },
    {
      icon: '../../assets/sidebar-icons/people-icon.png',
      text: 'People',
      route: '/people',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentRoute = this.router.url;
  }
}
