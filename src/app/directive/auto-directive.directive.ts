import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAutoDirective]'
})
export class AutoDirectiveDirective {
@Input() color: String;

  constructor(public el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

// working
@HostListener('mouseenter') onmouseenter() {
  this.el.nativeElement.style.backgroundColor = this.color;
}

@HostListener('mouseleave') onmouseleave() {
  this.el.nativeElement.style.backgroundColor = 'green';
}
}


