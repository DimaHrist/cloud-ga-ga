import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/shared/services/player.service';
import { IStation } from '../../interfaces/stations';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(private readonly playerService: PlayerService) { }

  // Статус плеера
  public isPlaying$;

  public stations: IStation[];

  public createStations() {
    this.stations = [
      {
        name: 'Acoustic',
        url: 'http://ic4.101.ru:8000/c16_34',
        cover: 'assets/covers/acoustic.svg'
      },
      {
        name: 'Ambient',
        url: 'http://ic4.101.ru:8000/a23',
        cover: 'assets/covers/ambient.svg'
      },
      {
        name: 'Blues',
        url: 'http://ic4.101.ru:8000/a76',
        cover: 'assets/covers/blues.svg'
      },
      {
        name: 'Chillout',
        url: 'http://ic4.101.ru:8000/c15_3',
        cover: 'assets/covers/chillout.svg'
      },
      {
        name: 'Deep House',
        url: 'http://ic4.101.ru:8000/c18_2',
        cover: 'assets/covers/deephouse.svg'
      },
      {
        name: 'Euro Hits',
        url: 'http://ic4.101.ru:8000/c16_13',
        cover: 'assets/covers/eurohits.svg'
      },
      {
        name: 'House',
        url: 'http://ic4.101.ru:8000/c6_5',
        cover: 'assets/covers/house.svg'
      },
      {
        name: 'Instrumental',
        url: 'http://ic4.101.ru:8000/a28',
        cover: 'assets/covers/instrumental.svg'
      },
      {
        name: 'Office Lounge',
        url: 'http://ic4.101.ru:8000/a30',
        cover: 'assets/covers/officelounge.svg'
      },
      {
        name: 'Rock Hits',
        url: 'http://ic4.101.ru:8000/a160',
        cover: 'assets/covers/rockhits.svg'
      },
      {
        name: 'Russian Rap',
        url: 'http://ic4.101.ru/stream/pro/aac/64/43',
        cover: 'assets/covers/russianrap.svg'
      },
      {
        name: 'Russian Rock',
        url: 'http://ic4.101.ru:8000/c1_2',
        cover: 'assets/covers/russianrock.svg'
      },
      {
        name: 'Smooth Jazz',
        url: 'http://ic4.101.ru:8000/c2_3',
        cover: 'assets/covers/smoothjazz.svg'
      },
      {
        name: 'Soulful House',
        url: 'http://ic4.101.ru:8000/c13_29',
        cover: 'assets/covers/soulfulhouse.svg'
      },
      {
        name: 'Tech House',
        url: 'http://ic4.101.ru:8000/c18_5',
        cover: 'assets/covers/techhouse.svg'
      },
      {
        name: 'Techno',
        url: 'http://ic4.101.ru:8000/c17_3',
        cover: 'assets/covers/techno.svg'
      },
      {
        name: 'Trance',
        url: 'http://ic4.101.ru:8000/c13_3',
        cover: 'assets/covers/trance.svg'
      },
    ];
  }

  // Смена статуса плеера
  public changePlayStatus(): void {
    this.playerService.changePlayStatus();
  }

  public scrollStations() {


    window.addEventListener('wheel', (e) => {
      const station = document.querySelector('.stations');

      if (e.deltaY > 0) { station.scrollLeft += 100; }
      else { station.scrollLeft -= 100; }
    });
  }

  ngOnInit() {
    this.isPlaying$ = this.playerService.isPlaying;
    this.createStations();
    this.scrollStations();
  }
}
