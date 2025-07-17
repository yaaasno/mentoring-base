import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive ({
  selector: '[yellow]',
  standalone: true
})

export class YellowDirective {
  color = 'white';

  @HostBinding('style.borderColor')
  get borderColor() {
    return this.color;
  }

  @HostBinding('style.color')
  get Color() {
    return this.color;
  }

  @HostListener('mouseenter')
  enter() {
    this.color = 'yellow';
  }

  @HostListener('mouseleave')
  leave() {
    this.color = 'white';
  }
}
