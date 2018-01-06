import { Component, OnInit } from '@angular/core';
import { SIDEBAR, POSTS } from '../mocks/blog-sidebar';

@Component({
  selector: 'app-blog',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.css']
})
export class BlogSidebarComponent implements OnInit {
  sidebar = SIDEBAR;
  postContentMode= 'list';
  posts = POSTS;
  post = this.posts[0];

  constructor() { }

  ngOnInit() {
  }

  getPostByCategory(category: String) {
      this.postContentMode = 'list';
      console.log(category);
  }

  getPostByTag(tag: String) {
      this.postContentMode = 'list';
      console.log(tag);
  }

  getPostByID(id: String) {
      this.postContentMode = 'detail';
      console.log(id);
  }

}
