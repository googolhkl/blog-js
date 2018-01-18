import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ABOUT } from '../mocks/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get('http://api.googolhkl.com/about').subscribe(data => {
          this.about = data;
      });
  }

}
