import { Component, Input, OnInit } from '@angular/core';
import { MinHeightEnum } from 'src/app/enums/min-height';

@Component({
  selector: 'app-info-landing',
  templateUrl: './info-landing.component.html',
  styleUrls: ['./info-landing.component.css'],
})
export class InfoLandingComponent implements OnInit {
  @Input() bgColor: string = '#121212';
  @Input() minHeight: MinHeightEnum = MinHeightEnum.infoLand;
  @Input() imageOne!: string;
  @Input() imageTwo!: string;
  @Input() imageThree!: string;
  @Input() imageFour!: string;
  @Input() textOne!: string;
  @Input() textTwo!: string;
  @Input() comingSoon: boolean = false;
  @Input() leftIsTitle: boolean = false;
  @Input() rightIsTitle: boolean = false;
  @Input() imageOneClasses!: string;
  @Input() imageTwoClasses!: string;
  @Input() imageThreeClasses!: string;
  @Input() imageFourClasses!: string;

  constructor() {}

  ngOnInit(): void {}
}
