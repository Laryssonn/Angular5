import { Injectable } from '@angular/core';

import { Cidade } from '../models/cidade';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { EstadoBr } from '../models/estado-br';
import { map } from '../../../../node_modules/rxjs/operators';

@Injectable()
export class DropdownService {

  constructor(private http: HttpClient) { }
  
  getEstadosBr(){
    return this.http.get<EstadoBr[]>('assets/dados/estadosbr.json')
   
  }

  getCidades(idEstado: number){
    return this.http.get<Cidade[]>('assets/dados/cidades.json')
    .pipe(
      map((cidades: Cidade[]) => cidades.filter(c => c.estado == idEstado))
    )
   
  }

  getCargos(){
    return[
      { nome:'Desenvolvedor', nivel: 'Junior', desc: 'Dev Jr' },
      { nome:'Desenvolvedor', nivel: 'Pleno', desc: 'Dev Pl' },
      { nome:'Desenvolvedor', nivel: 'Senior', desc: 'Dev Sr' }
    ]
  }
  
  getTec(){
    return[
      {nome: 'Java', desc: 'Java 8'},
      {nome: 'Php', desc: 'PHP'},
      {nome: 'Angular', desc: 'Angular 5'},
      {nome: 'Bootstrap', desc: 'Bootstrap 3'}

    ];
  }

  getNewsletter(){
    return[
      {valor: 's', desc:'Sim'},
      {valor: 'n', desc:'Não'}
    ]
  }
}
