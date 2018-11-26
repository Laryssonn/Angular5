import { NgModule } from "../../../node_modules/@angular/core";
import { AlunosComponent } from "./alunos.component";
import { CommonModule } from "../../../node_modules/@angular/common";
import { AlunosFormComponent } from "./alunos-form/alunos-form.component";
import { AlunosDetalheComponent } from "./alunos-detalhe/alunos-detalhe.component";
import { AlunosRoutingModule } from "./alunos.routing.module";
import { AlunosService } from "./alunos.service";
import { FormsModule } from "../../../node_modules/@angular/forms";
import { AlunosDeactivateGuard } from "../guards/alunos-deactivate.guard";
import { AlunoDetalheResolver } from "./guards/aluno-detalhe.resolver";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AlunosRoutingModule
    ],
    providers: [
        AlunosService, 
        AlunosDeactivateGuard,
        AlunoDetalheResolver
    ],
    declarations:[
        AlunosComponent,
        AlunosFormComponent,
        AlunosDetalheComponent
    ],
})

export class AlunosModule { }