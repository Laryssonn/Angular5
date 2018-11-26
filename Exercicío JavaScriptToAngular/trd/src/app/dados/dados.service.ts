import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dados } from './dados';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private readonly API = 'http://localhost:3000/dados';

  private produtoObj: any = {};

  constructor(private http: HttpClient) { }

  put(id: number, dados: any) {
    this.produtoObj = {
      "descricao": dados.desc,
      "unidade": dados.uni,
      "preco": dados.prec
    }
    return this.http.put(this.API + '/' + id, this.produtoObj);
  }


  post(dados: any) {
    this.produtoObj = {
      "descricao": dados.desc,
      "unidade": dados.uni,
      "preco": dados.prec
    }

    return this.http.post(this.API, this.produtoObj);
  }

  del(id: number) {
    const url = `${this.API}/${id}`;
    console.log(url);
    return this.http.delete(url);

  }


  list() {
    return this.http.get<Dados[]>(this.API);

  }
}