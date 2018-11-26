import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Http } from '../../../../node_modules/@angular/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: Http) { }

  consultarCEP(cep: string){
    cep = cep.replace(/\D/g, '');
    if (cep != "") {
      const validacep = /^[0-9]{8}$/;
      if(validacep.test(cep)) {

        return this.http.get(`//viacep.com.br/ws/${cep}/json`).pipe(map(dados => dados.json()));        
      }
    }

    return of({});
  }
}
