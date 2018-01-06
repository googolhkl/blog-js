import { Component, OnInit } from '@angular/core';
import { SIDEBAR, POSTS } from '../mocks/blog-sidebar';

@Component({
  selector: 'app-blog',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.css']
})
export class BlogSidebarComponent implements OnInit {
  sidebar = SIDEBAR;
  posts = POSTS;

  constructor() { }

  ngOnInit() {
  }

}
