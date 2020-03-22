import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-playing-info',
  templateUrl: './playing-info.component.html',
  styleUrls: ['./playing-info.component.scss']
})
export class PlayingInfoComponent implements OnInit {

  constructor() { }


  @Input() public title: string;
  @Input() public innerTitle: string;
  @Input() public addable = false;

  ngOnInit() {
  }

}
