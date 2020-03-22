import { Component, OnInit } from '@angular/core';
// const Client = import ('museria').Client;
// import { Client } from 'museria';
// import 'museria';
// import * as museria from 'museria';
declare const museria: any;

// const Client = museria.Client;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {
    // const client = new Client({
    //   address: 'localhost:4000'
    // });
    // client.init();
  }

  ngOnInit() {
    museria();
  }

  // museria: any;

  // Инициализация подключения к museria
  private async initConnectionMuseria(): Promise<any> {
    return
  }
}
