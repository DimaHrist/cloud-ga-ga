import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/shared/services/player.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  // Статус плеера
  public isPlaying$;

  constructor(private readonly playerService: PlayerService) { }

  // Смена статуса плеера
  public changePlayStatus(): void{
    this.playerService.changePlayStatus();
  }

  ngOnInit() {
    this.isPlaying$ = this.playerService.isPlaying;
  }

}
