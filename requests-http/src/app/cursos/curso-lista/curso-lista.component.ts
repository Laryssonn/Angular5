import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso-lista.component.html',
  styles: [],
  preserveWhitespaces: true
})
export class CursoListaComponent implements OnInit {

  cursos: Curso[];

  constructor(private service: CursosService) { }

  ngOnInit() {
    this.service.list()
    .subscribe(dados => this.cursos = dados);
  }

  
}
