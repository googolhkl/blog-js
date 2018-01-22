import {Component, OnInit, AfterContentInit} from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {Router, NavigationEnd} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  title = 'app';
  is_show_menu = false;
  hamberger = false;

  constructor(private router: Router) {}

  ngAfterContentInit() {
    this.router.events.subscribe(event => {
     if (event instanceof NavigationEnd) {
       (<any>window).ga('set', 'page', event.urlAfterRedirects);
       (<any>window).ga('send', 'pageview');
      }
    });
  }

  toggleMenu(): void {
    this.is_show_menu = !this.is_show_menu;
  }

  getMenuStyle(): object {
    return this.is_show_menu ? {'display': 'block'} : {'display': 'none'};
  }
}
