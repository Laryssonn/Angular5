import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private elementRef: ElementRef,
    private renderer:Renderer
  ) { 
    //console.log(this.elementRef);
    //this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }

}
