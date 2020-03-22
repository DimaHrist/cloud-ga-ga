import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopRoutingModule } from './top-routing.module';
import { ViewComponent } from './components/view/view.component';
import { UserComponent } from './components/user/user.component';
import { ListComponent } from './components/users-list/list.component';
import { SharedModule } from '../../shared/shared.module';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { SongComponent } from './components/song/song.component';
import { AuthorInfoComponent } from './components/author-info/author-info.component';
import { PlayingInfoComponent } from './components/playing-info/playing-info.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TopRoutingModule
  ],
  declarations: [
    ViewComponent,
    UserComponent,
    ListComponent,
    SongsListComponent,
    SongComponent,
    AuthorInfoComponent,
    PlayingInfoComponent
  ]
})
export class TopModule { }
