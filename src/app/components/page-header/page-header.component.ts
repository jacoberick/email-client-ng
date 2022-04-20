import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
})
export class PageHeaderComponent implements OnInit {
  @Input() headerText!: string;
  @Input() linkText!: string;
  @Input() imgLink!: string;
  @Input() route!: string;
  @Input() showButton: boolean = false;
  @Input() showMenu: boolean = false;
  @Input() isBroadcast: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
