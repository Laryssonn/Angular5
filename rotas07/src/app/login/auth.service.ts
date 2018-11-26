import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '../../../node_modules/@angular/router';
import { EventEmitter } from '../../../node_modules/@angular/common/src/facade/async';

@Injectable()
export class AuthService {

  usuarioAutentico: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

   removeElement(elemento) {
    var objTr = (elemento).parent('td').parent('tr');
    objTr.remove()
  }
  
  fazerLogin(usuario:Usuario){ 

    if(usuario.nome !== '' && usuario.senha !== ''){
      this.usuarioAutentico = true;
      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/cursos']);
    } else {
      this.usuarioAutentico = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioIsAutenticado(){
    return this.usuarioAutentico;
  }

}
