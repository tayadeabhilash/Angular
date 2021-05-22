import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  //@HostBinding('class.open') open = false;

  constructor(private elementRef: ElementRef) {
   }
  @HostListener('mouseclick') mouseclick(eventData: Event){
    this.elementRef.nativeElement.classList.append('open');
  }

}
