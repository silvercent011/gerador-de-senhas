import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export class CreateFormComponent {
  name!: string;

  constructor(private modalCtrl: ModalController) {}

  confirm() {
    return this.modalCtrl.dismiss({ name: this.name }, 'confirm');
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
