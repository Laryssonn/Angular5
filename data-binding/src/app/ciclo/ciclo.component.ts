import { 
  Component, 
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  Input} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit{
 
  @Input() valorInicial:number= 10;

  constructor() { 
    this.log('constructor');
  }
  ngOnChanges(){
    this.log('ngOnChanges');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }
  ngDoCheck(){
    this.log('ngDoCheck');
  }
  ngAfterContentInit(){
    this.log('ngAfterContentInit');
  }
  ngAfterContentChecked(){
    this.log('ngAfterContentChecked');
  }
  ngAfterViewInit(){
    this.log('ngAfterViewInit');
  }
  ngAfterViewChecked(){
    this.log('ngAfterViewCheked');
  }
  ngOnDestroy(){
    this.log('ngOnDestroy');
  }
  private log(hook:string){
    console.log(hook);
  }
}
