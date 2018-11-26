import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "../../../node_modules/@angular/router";
import { Observable } from "../../../node_modules/rxjs/Observable";
import { Injectable } from "../../../node_modules/@angular/core";

@Injectable()
export class CursosGuard implements CanActivateChild { 


    	canActivateChild(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            console.log('guarda de rota filha');
            return true;
        }
}