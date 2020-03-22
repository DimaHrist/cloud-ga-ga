import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // Получение текущего роута
  public currentRoute: string;

  constructor( private router: Router) { 
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      this.currentRoute = event instanceof NavigationEnd ? event.url : this.currentRoute
    })
  }

}
