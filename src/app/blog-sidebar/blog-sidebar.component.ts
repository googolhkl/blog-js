import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Sidebar } from '../blog-sidebar/shared/blog-sidebar.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.css']
})
export class BlogSidebarComponent implements OnInit {
  categories: any;
  tags: any;
  postContentMode= 'list';
  posts: any;
  post: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get('http://api.googolhkl.com/posts').subscribe(data => {
          this.posts = data['results'];
      });
      this.http.get('http://api.googolhkl.com/categories').subscribe(data => {
          this.categories = data;
      });
      this.http.get('http://api.googolhkl.com/tags').subscribe(data => {
          this.tags = data;
      });
  }

  getPostByCategory(category: String) {
      this.postContentMode = 'list';
      this.posts = null;
      this.http.get(`http://api.googolhkl.com/posts?type=category&name=${category}`).subscribe(data => {
          this.posts = data['results'];
      });
  }

  getPostByTag(tag: String) {
      this.postContentMode = 'list';
      this.posts = null;
      this.http.get(`http://api.googolhkl.com/posts?type=tag&name=${tag}`).subscribe(data => {
          this.posts = data['results'];
      });
  }

  getPostByID(id: String) {
      this.postContentMode = 'detail';
      this.post = null;
      this.http.get(`http://api.googolhkl.com/posts/${id}`).subscribe(data => {
          this.post = data;
      });
  }
}
