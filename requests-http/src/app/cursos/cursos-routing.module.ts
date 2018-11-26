import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoListaComponent } from './curso-lista/curso-lista.component';

const routes: Routes = [
  { path: '', component: CursoListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }