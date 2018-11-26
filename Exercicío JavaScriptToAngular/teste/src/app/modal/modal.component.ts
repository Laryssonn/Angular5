import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from './modal-component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'

})
export class ModalComponent {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent, {size: 'lg'});
    modalRef.componentInstance.name = 'World';
  }
}