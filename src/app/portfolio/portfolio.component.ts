import { Component, OnInit } from '@angular/core';
import { PORTFOLIOES } from '../mocks/portfolios'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolios = PORTFOLIOES;

  constructor() { }

  ngOnInit() {
  }

}
