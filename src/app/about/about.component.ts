import { Component, OnInit } from '@angular/core';
import { ABOUT } from '../mocks/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about = ABOUT;

  constructor() { }

  ngOnInit() {
  }

}
