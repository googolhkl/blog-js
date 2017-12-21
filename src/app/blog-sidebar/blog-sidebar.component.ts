import { Component, OnInit } from '@angular/core';
import { SIDEBAR } from '../mocks/blog-sidebar';

@Component({
  selector: 'app-blog',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.css']
})
export class BlogSidebarComponent implements OnInit {
  sidebar = SIDEBAR;

  constructor() { }

  ngOnInit() {
  }

}
