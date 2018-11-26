import { NgModule } from "../../node_modules/@angular/core";

import { ModuleWithProviders } from '../../node_modules/@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoIsNullComponent } from './cursos/curso-is-null/curso-is-null.component';
import { AuthGuard } from "./guards/auth.guard";
import { CursosGuard } from "./guards/cursos.guard";
import { AlunosGuard } from "./guards/alunos.guard";
import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";


const APP_ROUTES: Routes = [
    //{path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule'},
    {
        path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule',
        canActivate: [AuthGuard],
        canActivateChild: [AlunosGuard],
        canLoad: [AuthGuard]
    },
    //{ path:'cursos', component: CursosComponent},
    //{ path:'curso/:id', component: CursoDetalheComponent},
    //{ path: 'naoEncontrado', component: CursoIsNullComponent},
    { path:'login', component: LoginComponent},
    { path:'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: PaginaNaoEncontradaComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
@NgModule({
    imports:[RouterModule.forRoot(APP_ROUTES, {useHash: true})],
    exports:[RouterModule]
})
export class AppRoutingModule { }