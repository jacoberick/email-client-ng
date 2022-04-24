import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGaurdService {
  constructor(public authService: AuthService, public router: Router) {}

  // checks for auth and then gives/blocks access to route
  canActivate(): boolean {
    if (!this.authService.isAuthed) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
