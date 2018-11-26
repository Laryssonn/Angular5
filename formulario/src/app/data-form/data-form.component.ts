import { map, filter, scan, tap, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '../../../node_modules/@angular/forms';
import { Http } from '../../../node_modules/@angular/http';
import { DropdownService } from '../shared/services/dropdown.service';
import { EstadoBr } from '../shared/models/estado-br';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { Observable, empty } from '../../../node_modules/rxjs';
import { FormValidations } from '../shared/form-validations';
import { VerificaEmailService } from './services/verifica-email.service';
import { BaseFormComponent } from '../shared/base-form/base-form.component';
import { Cidade } from '../shared/models/cidade';



@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent extends BaseFormComponent implements OnInit {

  //formulario: FormGroup 
  //estados: Observable<EstadoBr[]>;
  estados: EstadoBr[];
  cidades: any;
  cargos: any[];
  tecnologias: any[];
  newsletterOp: any[];
  frameworks = ['Angular', 'React', 'Vue', 'Sencha']

  constructor(
    private formBuilder: FormBuilder,
    private http: Http,
    private dropdown: DropdownService,
    private cepService: ConsultaCepService,
    private verificaEmailService: VerificaEmailService
  ) { super(); }

  ngOnInit() {

    //this.verificaEmailService.verificarEmail('email@email.com').subscribe();
    //this.estados = this.dropdown.getEstadosBr();
    this.dropdown.getEstadosBr()
      .subscribe(dados => this.estados = dados);
    this.cargos = this.dropdown.getCargos();
    this.tecnologias = this.dropdown.getTec();
    this.newsletterOp = this.dropdown.getNewsletter();
    /*this.dropdown.getEstadosBr()
    .subscribe(dados =>{ this.estados = dados; console.log(dados);});*/
    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    });*/

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email], this.validarEmail.bind(this)],
      confirmarEmail: [null, [FormValidations.equalsTo('email')]],

      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],

      }),
      cargo: [null],
      tecnologias: [null],
      newsletter: ['s'],
      termos: [null, Validators.pattern('true')],
      frameworks: this.buildFrameworks()
    });

    this.formulario.get('endereco.cep').statusChanges
      .pipe(
        distinctUntilChanged(),
        tap(value => console.log('status CEP:', value)),
        switchMap(status => status === 'VALID' ?
          this.cepService.consultarCEP(this.formulario.get('endereco.cep').value) : empty()
        )
      )
      .subscribe(dados => dados ? this.popularDadosForm(dados) : {});

      this.formulario.get('endereco.estado').valueChanges
        .pipe(
          tap(estado => console.log('Novo Estado: ', estado)),
          map(estado => this.estados.filter(e => e.sigla === estado)),
          map(estados => estados && estados.length > 0 ? estados[0].id : empty()),
          switchMap((estadoId: number) => this.dropdown.getCidades(estadoId)),
          tap(console.log)
        )  
      .subscribe(cidades => this.cidades = cidades);
     
      
      //this.dropdown.getCidades(8).subscribe(console.log);
  } 

  buildFrameworks() {
    const values = this.frameworks.map(v => new FormControl(false));
    return this.formBuilder.array(values, FormValidations.requiredMinCheckbox(1));

    /*return [
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false)
    ]*/

  }

  setarCargo() {
    const cargo = { nome: 'Desenvolvedor', nivel: 'Pleno', desc: 'Dev Pl' };
    this.formulario.get('cargo').setValue(cargo);
  }
  consultarCEP() {

    let cep = this.formulario.get('endereco.cep').value;

    if (cep != null && cep !== '') {
      this.cepService.consultarCEP(cep)
        .subscribe(dados => this.popularDadosForm(dados));
    }
  }

  popularDadosForm(dados) {
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

    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        //cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf

      }
    });
  }

  limparFormulario() {
    this.formulario.patchValue({
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

  submit() {
    let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks.map((v, i) => v ? this.frameworks[i] : null)
        .filter(v => v !== null)
    });
    this.http
      .post('https://httpbin.org/post', JSON.stringify(valueSubmit)).pipe(
        map(res => res))
      .subscribe(dados => {
        console.log(dados);
        this.formulario.reset();
      },
        (error: any) => alert('errroooouuu'));
  }

  compararCargos(obj1, obj2) {
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
  }

  setarTec() {
    this.formulario.get('tecnologias').setValue(['Java', 'Php', 'Angular']);
  }

  validarEmail(formControl: FormControl) {
    return this.verificaEmailService.verificarEmail(formControl.value)
      .pipe(map(emailExiste => emailExiste ? { emailInvalido: true } : null))
  }
}