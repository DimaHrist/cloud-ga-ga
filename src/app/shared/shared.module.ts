import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { SongComponent } from './components/song/song.component';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { PlayingInfoComponent } from './components/playing-info/playing-info.component';
import { AuthorInfoComponent } from './components/author-info/author-info.component';
import { UserComponent } from './components/user/user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    CardComponent,
    SongComponent,
    SongsListComponent,
    PlayingInfoComponent,
    AuthorInfoComponent,
    UserComponent,
    UsersListComponent,
    CarouselComponent
  ],
  exports: [
    CardComponent,
    SongComponent,
    SongsListComponent,
    PlayingInfoComponent,
    AuthorInfoComponent,
    UserComponent,
    UsersListComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
