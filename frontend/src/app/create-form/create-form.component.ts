import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { PasswordService } from '../services/password.service';
@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export class CreateFormComponent {
  length: number = 12;
  useUpper: boolean = true;
  useLower: boolean = true;
  useNumbers: boolean = true;
  useSpecial: boolean = true;

  generatedPassword: string | undefined;

  constructor(
    private modalCtrl: ModalController,
    private passwordService: PasswordService
  ) {}

  confirm() {
    return this.modalCtrl.dismiss(
      {
        length: this.length,
        useUpper: this.useUpper,
        useLower: this.useLower,
        useNumbers: this.useNumbers,
        useSpecial: this.useSpecial,
      },
      'confirm'
    );
  }

  generatePassword() {
    this.passwordService
      .generatePassword({
        length: this.length,
        useUpper: this.useUpper,
        useLower: this.useLower,
        useNumbers: this.useNumbers,
        useSpecial: this.useSpecial,
      })
      .subscribe((data) => {
        this.generatedPassword = data.password;
      });
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
