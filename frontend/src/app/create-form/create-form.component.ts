import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { PasswordService } from '../services/password.service';
@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export class CreateFormComponent implements OnInit {
  passwordForm!: FormGroup;

  generatedPassword: string | undefined;

  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private passwordService: PasswordService
  ) {}
  ngOnInit(): void {
    this.passwordForm = new FormGroup(
      {
        length: new FormControl(12, [Validators.required, Validators.min(8)]),
        useUpper: new FormControl(true),
        useLower: new FormControl(true),
        useNumbers: new FormControl(true),
        useSpecial: new FormControl(true),
      },
      {
        validators: this.atLeastOneCheckboxValidator,
      }
    );
  }

  atLeastOneCheckboxValidator(form: AbstractControl): ValidationErrors | null {
    const useUpper = form.get('useUpper')!.value;
    const useLower = form.get('useLower')!.value;
    const useNumbers = form.get('useNumbers')!.value;
    const useSpecial = form.get('useSpecial')!.value;

    return useUpper || useLower || useNumbers || useSpecial
      ? null
      : { checkboxRequired: true };
  }

  get length() {
    return this.passwordForm.get('length');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.passwordForm?.value, 'confirm');
  }

  generatePassword() {
    this.passwordService
      .generatePassword(this.passwordForm?.value)
      .subscribe((data) => {
        this.generatedPassword = data.password;
      });
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
