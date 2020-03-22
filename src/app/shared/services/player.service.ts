import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  public jepa = false;

  // Текущий стрим
  private stream = new Audio();

  private isPlaying$ = new Subject<boolean>();
  public get isPlaying() {
    return this.isPlaying$;
  }

  public pause() {
    this.stream.pause();
    this.changePlayStatus(true);
  }

  public play() {
    if (!this.stream.src) return;
    this.stream.play();
    this.changePlayStatus(false);
  }

  public test(url: string) {
    if (this.stream.src !== url || this.stream.paused) {
      this.stream.src = url;
      this.play();
    } else {
      this.pause();
    }
  }

  public changePlayStatus(isPause: boolean): void{
    this.jepa = !isPause;
    this.isPlaying$.next(this.jepa);
  }


}
