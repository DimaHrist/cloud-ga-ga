import { Component } from '@angular/core';
// const Client = import ('museria').Client;
import { Client } from 'museria';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const client = new Client({
      address: 'localhost:4000'
    });
    client.init();
  }

  // Инициализация подключения к museria
  private async initConnectionMuseria(): Promise<any> {
    return
  }
}
