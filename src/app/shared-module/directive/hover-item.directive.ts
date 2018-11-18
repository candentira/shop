import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverItem]'
})
export class HoverItemDirective {

  @HostBinding('class')
  attrClass = "doHover";

  @HostListener("click", ["$event.target"])
  clicked(target: EventTarget) {
    console.log(`${(<HTMLElement>target).innerText} was clicked`);
  }

  constructor() {}

}
