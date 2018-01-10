import { Component } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  is_show_menu = false;
  hamberger = false;

  toggleMenu(): void {
    this.is_show_menu = !this.is_show_menu;
  }

  getMenuStyle(): object {
    return this.is_show_menu ? {'display': 'block'} : {'display': 'none'};
  }
}
