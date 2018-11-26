import { NgModule } from "../../../node_modules/@angular/core";

import { ModuleWithProviders } from '../../../node_modules/@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoIsNullComponent } from './curso-is-null/curso-is-null.component';


const CURSOS_ROUTES: Routes = [
    { path:'cursos', component: CursosComponent},
    { path:'curso/:id', component: CursoDetalheComponent},  
    { path: 'naoEncontrado', component: CursoIsNullComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(CURSOS_ROUTES);
@NgModule({
    imports:[RouterModule.forRoot(CURSOS_ROUTES)],
    exports:[RouterModule]
})
export class CursosRoutingModule { }