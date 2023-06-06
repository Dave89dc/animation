import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appButtonResize]'
})
export class ButtonResizeDirective {

  constructor(private element: ElementRef ) { }

}
