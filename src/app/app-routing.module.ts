import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'top',
    loadChildren: () => import('./modules/top/top.module').then(m => m.TopModule)
  },
  {
    path: 'library',
    loadChildren: () => import('./modules/library/library.module').then(m => m.LibraryModule)
  },
  {
    path: 'radio',
    loadChildren: () => import('./modules/radio/radio.module').then(m => m.RadioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
