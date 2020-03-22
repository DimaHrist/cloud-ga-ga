import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryRoutingModule } from './library-routing.module';
import { ViewComponent } from './components/view/view.component';

@NgModule({
  imports: [
    CommonModule,
    LibraryRoutingModule
  ],
  declarations: [ViewComponent]
})
export class LibraryModule { }
