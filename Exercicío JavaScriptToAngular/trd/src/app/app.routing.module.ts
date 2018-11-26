import { NgModule } from "@angular/core";

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guards/auth-guard";



const APP_ROUTES: Routes = [
    //{path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule'},
    { path:'login', component: LoginComponent},
    {path: 'manter', component: MainComponent, canActivate:[AuthGuard]},
    {path: '', component:LoginComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
@NgModule({
    imports:[RouterModule.forRoot(APP_ROUTES, {useHash: true})],
    exports:[RouterModule]
})
export class AppRoutingModule { }