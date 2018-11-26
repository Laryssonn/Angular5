
import {map} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome:null,
    email:null
  }

  constructor(
    private http: Http,
    private cepService: ConsultaCepService
  ) { }

  ngOnInit() {
  }

  

  verificaValidTouched(campo){

    return !campo.valid && campo.touched;
  }

  aplicasCssError(campo){
    return {
      'has-error':this.verificaValidTouched(campo),
      'has-feedback':this.verificaValidTouched(campo)
    }
  }

  onSubmit(form){
    console.log(form);

    this.http.post('https://httpbin.org/post', JSON.stringify(form.value)).pipe(
    map(res => res)).subscribe(dados => {
      console.log(dados)
      form.form.reset();
    });
    
  }

  consultarCEP(cep, form){
    cep = cep.replace(/\D/g, '');
    if(cep != null && cep !== ''){
      this.cepService.consultarCEP(cep)
      .subscribe(dados => this.popularDadosForm(dados, form));
    }
  }

  popularDadosForm(dados, formulario){
    /*formulario.setValue({
      nome: formulario.value.nome,
      email: formulario.value.email,
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf

      }
    });*/

    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf

      }
    });
  }

  limparFormulario(formulario){
    formulario.form.patchValue({
      endereco: {
        rua: null,
        cep: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null

      }
    });
  }
}
