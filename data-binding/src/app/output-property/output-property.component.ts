import { Component, OnInit, Input,  Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Element } from '../../../node_modules/@angular/compiler';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor:number = 0;

  @Output() mudouValor = new EventEmitter();
  
  @ViewChild('campoInput') campoValorInput: ElementRef;
 
  incrementar(){
    this.campoValorInput.nativeElement.value++;
  
    this.mudouValor.emit({novoValor: this.valor});
  }
  decrementar(){
    this.campoValorInput.nativeElement.value--;
  
    this.mudouValor.emit({novoValor: this.valor});
  }
  
  constructor() { }

  ngOnInit() {
  }

}
