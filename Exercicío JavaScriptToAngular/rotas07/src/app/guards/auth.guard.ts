import { Injectable } from '@angular/core';
import { CanActivate,  ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '../../../node_modules/@angular/router';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { AuthService } from '../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad{

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean{

    console.log('AuthGuard');

    return this.verificarAcesso();
   
  }

  private verificarAcesso(){
    if(this.authService.usuarioIsAutenticado()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  	canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
      console.log('canLoad: verificando acesso')
      return this.verificarAcesso();
    }
}
