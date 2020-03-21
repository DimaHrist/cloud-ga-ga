import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly http: HttpClient) {
    this.http.get('http://10.1.1.41:3000/song/add-tag')
    .subscribe(console.log)
  }
}
