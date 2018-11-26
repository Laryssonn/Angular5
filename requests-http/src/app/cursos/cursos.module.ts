import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoListaComponent } from './curso-lista/curso-lista.component';
import { CursosRoutingModule } from './cursos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  declarations: [CursoListaComponent]
})
export class CursosModule { }