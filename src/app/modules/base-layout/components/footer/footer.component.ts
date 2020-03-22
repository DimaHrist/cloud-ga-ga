import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/shared/services/player.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // Статус плеера
  public isPlaying$;

  constructor(private readonly playerService: PlayerService) { }

  // Смена статуса плеера
  public changePlayStatus(): void{
    // this.playerService.changePlayStatus();
  }

  ngOnInit() {
    this.isPlaying$ = this.playerService.isPlaying;
  }

}
