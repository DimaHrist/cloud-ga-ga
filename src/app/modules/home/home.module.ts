import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import {
  ViewComponent,
  PlayListComponent,
  UsersHistoryListComponent
} from './components';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    ViewComponent,
    PlayListComponent,
    UsersHistoryListComponent
  ]
})
export class HomeModule { }
