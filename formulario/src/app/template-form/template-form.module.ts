import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
//import { FormDebugComponent } from '../form-debug/form-debug.component';
//import { CampoControlErroComponent } from '../campo-control-erro/campo-control-erro.component';
import { HttpModule } from '../../../node_modules/@angular/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  declarations: [
    TemplateFormComponent,
   // FormDebugComponent,
   //CampoControlErroComponent
    

  ]
})
export class TemplateFormModule { }
