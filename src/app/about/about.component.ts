import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`${environment.apiUrl}/about`).subscribe(data => {
        this.about = data;
    });
  }

}
