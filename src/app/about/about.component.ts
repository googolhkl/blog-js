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
      this.http.get('http://localhost:8000/about').subscribe(data => {
          this.about = data;
      });
  }

}
