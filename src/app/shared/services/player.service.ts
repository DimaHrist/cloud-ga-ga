import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private jepa = false;

  private isPlaying$ = new Subject<boolean>();
  public get isPlaying() {
    return this.isPlaying$;
  }

  public changePlayStatus(): void{
    this.jepa = !this.jepa;
    this.isPlaying$.next(this.jepa);
  }

}
