import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { CreateFormComponent } from '../create-form/create-form.component';
import { PasswordService } from '../services/password.service';
import { Password } from '../types/Password';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  generatedPasswords: Password[] | undefined;

  constructor(
    private modalController: ModalController,
    private passwordService: PasswordService
  ) {}

  ngOnInit(): void {
    this.passwordService.passwordHistory().subscribe((data) => {
      this.generatedPasswords = data;
    });
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: CreateFormComponent,
    });
    modal.present();

    await modal.onWillDismiss().then(() => {
      this.ngOnInit();
    });
  }
}
