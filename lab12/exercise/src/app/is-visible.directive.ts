import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[isVisible]'
})
export class IsVisibleDirective {
  @Input() isVisible: boolean;
  
  constructor(private element: ElementRef,
              private renderer2: Renderer2) { }

  ngOnInit() {
    console.log(this.element.nativeElement);
    if(!this.isVisible) {
      // this.element.nativeElement.style.display = 'none';
      this.renderer2.setStyle(this.element.nativeElement, 'display', 'none');
    }
  }

}
