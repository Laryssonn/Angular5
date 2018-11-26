import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '../../node_modules/@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal-component';

declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
 
}