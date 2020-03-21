import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    BaseLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    BaseLayoutComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class BaseLayoutModule {
}
