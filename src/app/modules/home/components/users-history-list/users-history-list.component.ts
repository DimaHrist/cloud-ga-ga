import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-history-list',
  templateUrl: './users-history-list.component.html',
  styleUrls: ['./users-history-list.component.scss']
})
export class UsersHistoryListComponent implements OnInit {

  constructor() { }

  // Высота экрана
  public height: any;

  // Список итосрии
  public listHistory = [
    {music: 'Track', album: {title: 'Album', year: '1996'}, author: 'Author'},
    {music: 'Track', album: {title: 'Album', year: '1996'}, author: 'Author'},
    {music: 'Track', album: {title: 'Album', year: '1996'}, author: 'Author'},
    {music: 'Track', album: {title: 'Album', year: '1996'}, author: 'Author'},
    {music: 'Track', album: {title: 'Album', year: '1996'}, author: 'Author'},
    {music: 'Track', album: {title: 'Album', year: '1996'}, author: 'Author'},
    {music: 'Track', album: {title: 'Album', year: '1996'}, author: 'Author'},
    {music: 'Track', album: {title: 'Album', year: '1996'}, author: 'Author'},
    {music: 'Track', album: {title: 'Album', year: '1996'}, author: 'Author'}
  ];

  ngOnInit() {
    this.height = document.documentElement.clientHeight / 3.1;
  }
}
