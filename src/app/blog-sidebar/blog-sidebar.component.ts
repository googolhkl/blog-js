import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  post: any;

  constructor(private http: HttpClient) { }

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
      this.http.get('http://localhost:8000/posts/279').subscribe(data => {
          this.post = data;
      });
      console.log(id);
  }

}
