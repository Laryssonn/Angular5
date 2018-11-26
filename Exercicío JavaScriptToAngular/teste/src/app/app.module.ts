import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Routes } from './app.routing';
import { Tes1Component } from './tes1/tes1.component';
import { NgbModalModule } from '../../node_modules/@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal-component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Tes1Component,
    ModalComponent,
    NgbdModalContent
  ],
  entryComponents: [NgbdModalContent],
  imports: [
    RouterModule.forRoot(Routes),
    BrowserModule,
    NgbModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }