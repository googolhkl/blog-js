import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolios: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get('http://api.googolhkl.com/portfolios').subscribe(data => {
        this.portfolios = data;
      });
  }

}
