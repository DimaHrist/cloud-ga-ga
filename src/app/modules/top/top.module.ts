import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopRoutingModule } from './top-routing.module';
import { ViewComponent } from './components/view/view.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TopRoutingModule
  ],
  declarations: [
    ViewComponent
  ]
})
export class TopModule {
}
