import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioRoutingModule } from './radio-routing.module';
import { ViewComponent } from './components/view/view.component';

@NgModule({
  imports: [
    CommonModule,
    RadioRoutingModule,
  ],
  declarations: [ViewComponent]
})
export class RadioModule { }
