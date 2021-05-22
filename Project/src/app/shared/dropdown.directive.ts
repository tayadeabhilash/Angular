import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') open = false;

  constructor(private elementRef: ElementRef) { }
  @HostListener('click') mouseclick(eventData: Event){
    this.open = !this.open;
  }

}
