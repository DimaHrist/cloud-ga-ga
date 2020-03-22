import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {

  constructor() { }

  @Input() public title: string;
  @Input() public addable = false;

  ngOnInit() {
  }

}
