import { ModuleWithProviders } from '../../node_modules/@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoIsNullComponent } from './cursos/curso-is-null/curso-is-null.component';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';


const APP_ROUTES: Routes = [
    {
     path:'cursos', component: CursosComponent,
     canActivate: [AuthGuard], 
     canActivateChild: [CursosGuard]
    },
    { path: 'naoEncontrado', component: CursoIsNullComponent, canActivate: [AuthGuard]},
    { path:'curso/:id', component: CursoDetalheComponent, canActivate: [AuthGuard]},
    { path:'login', component: LoginComponent},
    { path:'', component: HomeComponent, canActivate: [AuthGuard]}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);