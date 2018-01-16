import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PORTFOLIOES } from '../mocks/portfolios';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolios: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get('http://localhost:8000/portfolios').subscribe(data => {
        console.log('hello');
        this.portfolios = data;
      });
  }

}
