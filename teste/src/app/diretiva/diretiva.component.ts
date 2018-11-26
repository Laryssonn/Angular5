import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  templateUrl: './diretiva.component.html',
  styleUrls: ['./diretiva.component.css']
})
export class DiretivaComponent implements OnInit {

  aba: string = 'home';
  constructor() { }

  ngOnInit() {
  }

}
