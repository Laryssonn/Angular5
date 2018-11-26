import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable()
export class AlunosService {

  private alunos: Aluno[] = [
    {id: 1, nome: 'Aluno 1', email: 'aluno01@gmail.com' },
    {id: 2, nome: 'Aluno 2', email: 'aluno02@gmail.com' },
    {id: 3, nome: 'Aluno 3', email: 'aluno03@gmail.com' }
  ];

  getAlunos(){
    return this.alunos;
  }

  getAluno(id: number){
    for(let i = 0;i < this.alunos.length; i++){
      let aluno = this.alunos[i];
      if(aluno.id == id){
        return aluno;
      }
    }
    return null;
  }
  constructor() { }

}
