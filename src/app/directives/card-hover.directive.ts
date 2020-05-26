import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCardBackground]'
})
export class CardHoverDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = '#eeeeee';
  }
}
