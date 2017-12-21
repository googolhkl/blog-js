import { Component, OnInit } from '@angular/core';
import { RESUME } from '../mocks/resume';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  resume = RESUME;

  constructor() { }

  ngOnInit() {
  }

}
