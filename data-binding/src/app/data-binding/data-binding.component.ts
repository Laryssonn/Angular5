import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:string = 'http://datainfo.com.br';
  cursoAngular:boolean =true;
  urlImagem = 'http://lorempixel.com/400/200/nature/';
  valorAtual:string = '';
  valorSalvo:string = '';
  valorInicial = 15;
  isMouseOver:boolean = false;
  nome:string = 'abc';
  pessoa = {
    nome:'Larysson',
    idade:20
  }
  nomeDoCurso:string = 'Angular 5';

  getValor(){
    return 1;
  }
  getCurso(){
    return true;
  }

  botaoClicado(){
    alert('botão Clicado!!');
  }
  onKeyUp(evento){
    this.valorAtual = evento.target.value;

  }
  salvarValor(valor){
    this.valorSalvo = valor;
  }
  onMouse(){
    this.isMouseOver = !this.isMouseOver;
  }
  onMudouValor(evento){
    console.log(evento.novoValor);
  }
  constructor() { }

  ngOnInit() {
  }

}
