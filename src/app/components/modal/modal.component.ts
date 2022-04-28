import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() contactName!: string;
  @Input() hideMe: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
