import { Component, OnInit } from '@angular/core';
import { Subscription } from '../../../../node_modules/rxjs/Subscription';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { AlunosService } from '../alunos.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.css']
})
export class AlunosDetalheComponent implements OnInit {

  aluno: Aluno;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
   /* this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.aluno = this.alunosService.getAluno(id);
      }
    );*/

    console.log('ngOnInit: AlunosDetalheComponent');

    this.inscricao = this.route.data.subscribe(
      (info: {aluno: Aluno} ) => {
        console.log('Recebendo o obj Aluno do Resolver');
        this.aluno = info.aluno;
      }
    );
  }

  editaContato(){
    this.router.navigate(['/alunos',this.aluno.id, 'edit']);
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
