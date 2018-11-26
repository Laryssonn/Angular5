import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '../../../node_modules/@angular/router';
import { Observable } from '../../../node_modules/rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean{

    console.log('AuthGuard');
    if(this.authService.usuarioIsAutenticado()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
    
  }
}
