import { AuthQuery } from './login/state/auth.query';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authQuery:AuthQuery ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    return this.authQuery.selectIsLoggedIn$.pipe(
      map(isLoggedIn => { if (isLoggedIn) { return true; } else {  return this.router.createUrlTree(['/login']) } })
    )

  }

}
