import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonResize]'
})
export class ButtonResizeDirective {

  constructor(private element: ElementRef) { }

  @HostListener('click')
  onClick(){
    this.element.nativeElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
      this.element.nativeElement.style.transform = 'scale(1)';
    }, 1000)
  }



}

