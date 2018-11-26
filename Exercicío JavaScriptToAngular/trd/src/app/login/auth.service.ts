import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuarioAutentico: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }
  
  fazerLogin(usuario:Usuario){

    if(usuario.nome == 'larysson' && usuario.senha == 'd'){
      this.usuarioAutentico = true;
      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/manter']);
    } else {
      this.usuarioAutentico = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioIsAutenticado(){
    return this.usuarioAutentico;
  }
  flw(){
    this.usuarioAutentico = false;
    this.mostrarMenuEmitter.emit(false);
  }
}