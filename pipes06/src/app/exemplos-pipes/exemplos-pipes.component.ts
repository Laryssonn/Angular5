import { Component, OnInit } from '@angular/core';
import { resolve } from 'path';
import { reject } from '../../../node_modules/@types/q';
import { Observable } from '../../../node_modules/rxjs/Rx';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  } 

  livros: string[] = ['Java', 'Angular 5'];
  filtro: string;

  addCurso(valor){
    this.livros.push(valor);
  }

  obterCursos(){
    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '' ){
      return this.livros;
    }  
      return this.livros.filter((v) =>{
        if(v => v.toLocaleLowerCase().indexOf(this.filtro) >= 0){
          return true;
        }
        return false;
      });
  }

  valorAsync = new Promise((resolve, reject)=> {
    setTimeout(()=> resolve('Valor Assíncrono'),2000)
  });

  valorAsync2 = Observable.interval(3000)
    .map(valor => 'Valor Assíncrono 2' );

  constructor() { }

  ngOnInit() {
  }

}
