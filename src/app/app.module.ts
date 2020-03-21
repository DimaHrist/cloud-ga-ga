import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BaseLayoutModule } from 'src/app/modules/base-layout/base-layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BaseLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
