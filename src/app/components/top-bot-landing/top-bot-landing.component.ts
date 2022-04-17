import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bot-landing',
  templateUrl: './top-bot-landing.component.html',
  styleUrls: ['./top-bot-landing.component.css'],
})
export class TopBotLandingComponent implements OnInit {
  @Input() headerText!: string;
  @Input() description!: string;
  @Input() showHeader: boolean = false;
  @Input() showCopyright: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
