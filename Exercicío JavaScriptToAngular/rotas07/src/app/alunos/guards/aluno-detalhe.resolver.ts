import { Observable } from "../../../../node_modules/rxjs/Observable";
import { Injectable } from "../../../../node_modules/@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "../../../../node_modules/@angular/router";
import { Aluno } from "../aluno";
import { AlunosService } from "../alunos.service";

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {
    constructor(private alunosService: AlunosService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {

          console.log('AlunoDetalheResolver');  

          let id = route.params['id'];   
            
            return this.alunosService.getAluno(id);
    }
}
