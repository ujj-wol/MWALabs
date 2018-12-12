import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[loggable]'
})
export class LoggableDirective {

  //constructor(private element: ElementRef) { }

  // Event listeners for element hosting the directive
  @HostListener('dblclick') myHandler() {
    // console.log(`${this.element.nativeElement.nodeName} element has been clicked.`);  
    console.log(`DIV element has been clicked.`);  
  }
}
