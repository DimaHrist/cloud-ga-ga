import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryRoutingModule } from './library-routing.module';
import { ViewComponent } from './components/view/view.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LibraryRoutingModule
  ],
  declarations: [ViewComponent]
})
export class LibraryModule { }
