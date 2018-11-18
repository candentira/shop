import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverItemDirective } from './directive/hover-item.directive';

@NgModule({
  declarations: [HoverItemDirective],
  imports: [
    CommonModule
  ],
  exports: [HoverItemDirective]
})
export class SharedModule { }
