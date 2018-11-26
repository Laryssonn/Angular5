import { Component, OnInit, TemplateRef, OnChanges } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { Dados } from "../dados/dados";
import { DadosService } from "../dados/dados.service";
import { HttpClient } from "../../../node_modules/@angular/common/http";

declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  preserveWhitespaces: true
})
export class MainComponent implements OnInit {

  modalRef: BsModalRef;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  id: any;
  prec;
  aplicarCss: boolean = true;
  private controlDados: any = {
    cod: null,
    desc: null,
    uni: null,
    prec: null
  };

  private dados: Dados[];
  private fieldArray: Array<any> = [];
  private newAttribute: any = {
    cod: 4
  };


  aplicasCssError(campo){
    return {
      'has-error':this.verificaValidTouched(campo),
      'has-feedback':this.verificaValidTouched(campo)
    }
  }

  verificaValidTouched(campo){

    return !campo.valid && campo.touched;
  }

  constructor(private service: DadosService, private http: HttpClient, private modalService: BsModalService) { }



  validarCampo(){
    this.aplicarCss = true;
  }
  validarCampos(){
    this.aplicarCss = false;
  }

 
  
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  addFieldValue() {
    /*this.fieldArray.push(this.newAttribute)
    this.newAttribute = {
      cod: ++this.newAttribute.cod
    };*/



    this.service.post(this.controlDados).subscribe(att => this.atualizarDados());

    this.limparDados();
  }

  deleteFieldValue(index) {
    //this.fieldArray.splice(index, 1);


    this.service.del(index).subscribe(att => this.atualizarDados());


  }

  pegarDados(index) {
    this.controlDados.prec = this.dados[index].preco;
    this.controlDados.desc = this.dados[index].descricao;
    this.controlDados.uni = this.dados[index].unidade;

    this.id = this.dados[index].id;

  }

  salvarDados() {
    /*this.fieldArray[this.id].prec= this.controlDados.prec;
    this.fieldArray[this.id].desc = this.controlDados.desc;
    this.fieldArray[this.id].uni =this.controlDados.uni;*/
    
    this.service.put(this.id, this.controlDados).subscribe(att => this.atualizarDados());

    this.limparDados();
  }

  limparDados() {
    this.controlDados = {
      cod: null,
      desc: null,
      uni: null,
      prec: null
    };
  }

  atualizarDados() {
    this.service.list()
      .subscribe(dados => this.dados = dados);
  }

  ngOnInit() {
    this.atualizarDados();
  
  }
}
