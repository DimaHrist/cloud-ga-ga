import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  public scrollStations(event) {
    const station = document.querySelector('.stations');
    if (event.deltaY > 0) station.scrollLeft += 70;
    else station.scrollLeft -= 70;
  }


  ngOnInit() {
  }

}
