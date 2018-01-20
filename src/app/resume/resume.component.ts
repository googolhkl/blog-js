import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  resume: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`${environment.apiUrl}/resume`).subscribe(data => {
      this.resume = data;
    });
  }

}
