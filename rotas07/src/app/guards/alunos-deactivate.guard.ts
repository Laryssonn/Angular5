import { AlunosFormComponent } from "../alunos/alunos-form/alunos-form.component";
import { Injectable } from "../../../node_modules/@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from "../../../node_modules/@angular/router";
import { Observable } from "../../../node_modules/rxjs/Observable";
import { IFormCanDeactivate } from "./iform-candeactivate";


@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
        
        canDeactivate(
            component: IFormCanDeactivate,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {

            console.log('guarda de desativação');
            
            return component.podeDesativar();
    }
}
