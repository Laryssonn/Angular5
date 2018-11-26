import { MainComponent } from "./main/main.component";
import { LoginComponent } from "./login/login.component";
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path:'manter', component: MainComponent},
    { path:'login', component: LoginComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);