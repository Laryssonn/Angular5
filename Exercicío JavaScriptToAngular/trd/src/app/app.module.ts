import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import {NgbModal, ModalDismissReasons, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from './modals/modalCr.component';
import {  BootstrapModalModule    }  from    'ng2-bootstrap-modal' ; 
import { ModalModule } from 'ngx-bootstrap/modal';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth-guard';
import { HttpClientModule } from '../../node_modules/@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    NgbdModalContent,
  
    
  ],
  entryComponents: [NgbdModalContent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BootstrapModalModule,
    ModalModule.forRoot(),

  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
