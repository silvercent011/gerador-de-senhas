import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Password } from '../types/Password';
import { PasswordRequest } from '../types/PasswordRequest';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  constructor(private http: HttpClient) {}

  generatePassword(input: PasswordRequest) {
    return this.http.post<Password>(
      `${environment.apiUrl}/generate-password`,
      input
    );
  }

  passwordHistory(): Observable<Password[]> {
    return this.http.get<Password[]>(`${environment.apiUrl}/password-history`);
  }
}
