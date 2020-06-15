import { Directive, ElementRef, HostListener, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {
  @HostBinding('class.card-outline-primary') private ishovering: boolean;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    // el.nativeElement.style.backgroundColor = '#eeeeee';
  }

  @HostListener('mouseleave') onMouseLeave() {
    const part = this.el.nativeElement;
    this.renderer.setStyle(part, 'background-color', '#ffffff');
    this.ishovering = false;
  }
  @HostListener('mouseenter') onMouseEnter() {
    const part = this.el.nativeElement;
    this.renderer.setStyle(part, 'background-color', '#eeeeee');
    this.ishovering = true;
  }
}
