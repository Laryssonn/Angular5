import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "../../../node_modules/@angular/router";
import { Observable } from "../../../node_modules/rxjs/Observable";
import { Injectable } from "../../../node_modules/@angular/core";

@Injectable()
export class AlunosGuard implements CanActivateChild { 


    	canActivateChild(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            //console.log(route);
            //console.log(state);
            console.log('AlunosGuard: Guarda de rota filha');
            if(state.url.includes('edit')){
                //return false;
            }
            return true;
        }
}