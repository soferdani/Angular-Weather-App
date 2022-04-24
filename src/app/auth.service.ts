import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import { AuthStore, AuthState } from './login/state/auth.store';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(user:string) {
    this.authStore.update((currentAuthState: AuthState) => ({ ...currentAuthState, userName: user, token: 'blabla' }));
    // this.router.navigate(['/current-weather',{userName: "dani"}]);
    this.router.navigate(['/current-weather']);
  }

  constructor(private router: Router, private authStore: AuthStore) { }
}
