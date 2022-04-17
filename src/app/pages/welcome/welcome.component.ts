import { Component, OnInit } from '@angular/core';
import { MinHeightEnum } from 'src/app/enums/min-height';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  minHeightTopBotEnum: MinHeightEnum = MinHeightEnum.topBot;
  constructor() {}

  ngOnInit(): void {}
}
