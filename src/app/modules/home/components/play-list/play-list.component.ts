import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss']
})
export class PlayListComponent implements OnInit {

  constructor() { }

  // Список музыки
  public list = [
    {tag: 'Track -', title: '(author/album)', time: '3:12'},
    {tag: 'Track -', title: '(author/album)', time: '3:12'},
    {tag: 'Track -', title: '(author/album)', time: '3:12'},
    {tag: 'Track -', title: '(author/album)', time: '3:12'},
    {tag: 'Track -', title: '(author/album)', time: '3:12'},
    {tag: 'Track -', title: '(author/album)', time: '3:12'},
    {tag: 'Track -', title: '(author/album)', time: '3:12'},
    {tag: 'Track -', title: '(author/album)', time: '3:12'},
    {tag: 'Track -', title: '(author/album)', time: '3:12'}
  ];

  ngOnInit() {
  }

}
