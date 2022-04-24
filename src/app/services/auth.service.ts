import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthed: boolean =
    sessionStorage.getItem('auth') != null
      ? JSON.parse(sessionStorage.getItem('auth') as string)
      : false;

  constructor(private router: Router) {}

  setSessionStorage(responseObj: any) {
    sessionStorage.setItem('auth', responseObj);
  }

  // onSubmit function for login and signup forms
  async handleSubmit(formData: FormGroup, path: string): Promise<void> {
    await fetch(`http://localhost:3000/${path}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value),
    })
      .then((res) => res.json())
      .then((res) => {
        this.isAuthed = res.success;
        return res;
      })
      .then((data) => {
        this.setSessionStorage(
          JSON.stringify(data, [
            'first_name',
            'last_name',
            'email',
            'success',
            'message',
          ])
        );
      })
      .then(() => {
        this.isAuthed ? this.router.navigate(['broadcasts']) : null;
      });
  }
}
