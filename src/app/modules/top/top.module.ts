import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopRoutingModule } from './top-routing.module';
import { ViewComponent } from './components/view/view.component';

@NgModule({
  imports: [
    CommonModule,
    TopRoutingModule
  ],
  declarations: [ViewComponent]
})
export class TopModule { }
