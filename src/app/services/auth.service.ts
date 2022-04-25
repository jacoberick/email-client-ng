import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // checks session storage for a successful auth
  isAuthed: boolean =
    sessionStorage.getItem('auth') != null
      ? JSON.parse(sessionStorage.getItem('auth') as string)
      : false;

  constructor(private router: Router) {}

  onLogout() {
    sessionStorage.clear();
  }

  getUserId() {
    return JSON.parse(sessionStorage.getItem('auth') as string).id;
  }

  // onSubmit function for login and signup forms
  async handleSubmit(formData: FormGroup, path: string): Promise<void> {
    await fetch(`http://localhost:3000/api/${path}`, {
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
        sessionStorage.setItem('auth', JSON.stringify(data));
      })
      .then(() => {
        this.isAuthed ? this.router.navigate(['broadcasts']) : null;
      });
  }

  async handlePeopleSubmit(
    form_data: FormGroup,
    user_id: string,
    path: string,
    created_at: any
  ): Promise<void> {
    let request = form_data.value;
    request.user_id = user_id;
    request.created_at = created_at;
    await fetch(`http://localhost:3000/api${path}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    }).then((res) =>
      res.status === 201 ? this.router.navigate(['people']) : null
    );
  }
}
