import { NgModule } from "../../../node_modules/@angular/core";
import { RouterModule } from "../../../node_modules/@angular/router";
import { AlunosComponent } from "./alunos.component";
import { AlunosDetalheComponent } from "./alunos-detalhe/alunos-detalhe.component";
import { AlunosFormComponent } from "./alunos-form/alunos-form.component";
import { AlunosDeactivateGuard } from "../guards/alunos-deactivate.guard";
import { AlunoDetalheResolver } from "./guards/aluno-detalhe.resolver";

const alunosRoutes = [
    {path: '', component: AlunosComponent, children : [
        {path: 'novo', component: AlunosFormComponent},
        {
            path: ':id', component: AlunosDetalheComponent,
            resolve: { aluno: AlunoDetalheResolver }
        },
        {
            path: ':id/edit', component: AlunosFormComponent,
            canDeactivate: [AlunosDeactivateGuard]
        }
    ]}
    
   
];

@NgModule({
    imports: [
        RouterModule.forChild(alunosRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AlunosRoutingModule { } 