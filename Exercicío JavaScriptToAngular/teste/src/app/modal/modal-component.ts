import {Component, Input} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
  <div class="modal-header">
  <button type="button" class="close" data-dismiss="modal">
    <span aria-hidden="true">&times;</span>
  </button>
  <h4 class="modal-title">Cadastrar Produto</h4>
</div>
<div class="modal-body">
  <h4>Descrição</h4>
  <input type="text" id="inputDesc" class="form-control" placeholder="Descrição" required>
  <h4>Unidade</h4>
  <div class="row">
    <div class="col-sm-3">
      <select class="form-control" id="uni">
        <option>Uni</option>
        <option>Kg</option>
        <option>Gr</option>
      </select>
    </div>
  </div>
  <h4>Preço</h4>
  <input type="text" id="inputPreco" class="form-control" placeholder="Preço" required>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
  <button type="button" id="salvar" class="btn btn-primary">Salvar Produto</button>
</div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}
