import { NgModule } from "../../../node_modules/@angular/core";

import { CursosComponent } from "./cursos.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursoIsNullComponent } from "./curso-is-null/curso-is-null.component";
import { CursosService } from "./cursos.service";
import { CommonModule } from "../../../node_modules/@angular/common";
import { CursosRoutingModule } from "./cursos.routing.module";
//import { RouterModule } from "../../../node_modules/@angular/router";

@NgModule({
    imports: [
        CommonModule,
        CursosRoutingModule
        //RouterModule
    ],
    exports: [],
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoIsNullComponent
    ],
    providers: [CursosService],
})

export class CursosModule { }