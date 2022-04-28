import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() contactName: string = '';
  @Input() hideMe: boolean = true;
  @Input() contactId!: string;

  constructor(private authService: AuthService) {}

  async onConfirmDelete() {
    await this.authService.deletePerson(this.contactId);
  }

  ngOnInit(): void {}
}
