import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  resume: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get('http://api.googolhkl.com/resume').subscribe(data => {
        console.log(data);
        this.resume = data;
      });
  }

}
