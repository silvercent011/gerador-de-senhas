import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { CreateFormComponent } from '../create-form/create-form.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private modalController: ModalController) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: CreateFormComponent,
    });
    modal.present();
  }
}
