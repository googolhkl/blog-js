import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolios: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`${environment.apiUrl}/portfolios`).subscribe(data => {
      this.portfolios = data;
    });
  }

}
