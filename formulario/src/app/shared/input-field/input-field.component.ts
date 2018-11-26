import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_FIELD_VALUE_ACESSOR: any = {
  provide: NG_VALUE_ACCESSOR, 
  useExisting: forwardRef(()=> InputFieldComponent),
  multi: true
};

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  providers: [INPUT_FIELD_VALUE_ACESSOR]
})
export class InputFieldComponent implements  ControlValueAccessor {

  @Input() classeCss;
  @Input() id: string;
  @Input() label: string;
  @Input() place: string;
  @Input() type ='text';
  @Input() control;
  @Input() isReadOnly = false;

  private innerValue: any;

  get value(){
    return this.innerValue;
  }

  set value(v: any){
    if(v !== this.innerValue){
      this.innerValue = v;
      this.onChengeCb(v);
    }
   
  }




  onChengeCb: (_ : any)=> void = () => {}; 
  onTouchedCb: (_ : any)=> void = () => {}; 

  writeValue(value: any): void{
   if(value !== this.innerValue){
    /*this.innerValue = value;
    this.onChengeCb(value);*/
    this.value = value;
   }
  }
  registerOnChange(fn: any): void{
    this.onChengeCb = fn;
  }
  
  registerOnTouched(fn: any): void{
    this.onTouchedCb = fn;
  }
  setDisabledState?(isDisabled: boolean): void{
    this.isReadOnly = isDisabled;
  }
}
