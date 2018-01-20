import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Post } from './shared/blog-sidebar.model';

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
    this.http.get(`${environment.apiUrl}/posts`).subscribe(data => {
        this.posts = data['results'];
    });
    this.http.get(`${environment.apiUrl}/categories`).subscribe(data => {
        this.categories = data;
    });
    this.http.get(`${environment.apiUrl}/tags`).subscribe(data => {
        this.tags = data;
    });
  }

  getPostByCategory(category: String) {
    this.postContentMode = 'list';
    this.posts = null;
    this.http.get(`${environment.apiUrl}/posts?type=category&name=${category}`).subscribe(data => {
        this.posts = data['results'];
    });
  }

  getPostByTag(tag: String) {
    this.postContentMode = 'list';
    this.posts = null;
    this.http.get(`${environment.apiUrl}/posts?type=tag&name=${tag}`).subscribe(data => {
        this.posts = data['results'];
    });
  }

  getPostByID(id: String) {
    this.postContentMode = 'detail';
    this.post = null;
    this.http.get(`${environment.apiUrl}/posts/${id}`).subscribe(data => {
        this.post = data;
    });
  }
}
