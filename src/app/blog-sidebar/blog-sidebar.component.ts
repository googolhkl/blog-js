import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Post } from './shared/blog-sidebar.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PaginatorService } from '../paginator.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.scss'],
  providers: [PaginatorService]
})
export class BlogSidebarComponent implements OnInit {
  searchMode: String = '';
  category: String;
  tag: String;

  categories: any;
  tags: any;
  postContentMode = 'list';
  posts: any;
  post: any;
  postId: String;
  currentPage = 1;
  numPages: number;

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private location: Location,
              private paginator: PaginatorService) { }

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id');
    if (this.route.snapshot.paramMap.get('id') === null) {
      this.postContentMode = 'list';
    } else {
      this.postContentMode = 'detail';
      this.getPostByID(this.postId);
    }
    this.http.get(`${environment.apiUrl}/posts`).subscribe(data => {
        this.posts = data['results'];
        this.currentPage = data['current_page'] - 1;
        this.numPages = data['num_pages'];
        this.paginator.slide(this.currentPage, 0, this.numPages);
    });
    this.http.get(`${environment.apiUrl}/categories`).subscribe(data => {
        this.categories = data;
    });
    this.http.get(`${environment.apiUrl}/tags`).subscribe(data => {
        this.tags = data;
    });
  }

  pagenate(current: number, offset: number, total: number) {
    if (current >= 0 && current < total) {
      this.paginator.slide(current, offset, total);
      if (current + offset >= 0 && current + offset < total) {
        this.currentPage = current + offset;
      } else {
        return;
      }
      if (this.searchMode === '') {
        this.http.get(`${environment.apiUrl}/posts?page=${this.currentPage + 1}`).subscribe(data => {
            this.posts = data['results'];
        });
      } else if (this.searchMode === 'category') {
        this.http.get(`${environment.apiUrl}/posts?type=category&name=${this.category}&page=${this.currentPage + 1}`).subscribe(data => {
          this.posts = data['results'];
        });
      } else if (this.searchMode === 'tag') {
          this.http.get(`${environment.apiUrl}/posts?type=tag&name=${this.tag}&page=${this.currentPage + 1}`).subscribe(data => {
            this.posts = data['results'];
        });
      }
    }
  }

  getPostByCategory(category: String) {
    this.category = category;
    this.postContentMode = 'list';
    this.posts = null;
    this.http.get(`${environment.apiUrl}/posts?type=category&name=${this.category}`).subscribe(data => {
      this.currentPage = data['current_page'] - 1;
      this.numPages = data['num_pages'];
      this.posts = data['results'];
      this.searchMode = 'category';
      this.paginator.slide(this.currentPage, 0, this.numPages);
    });
  }

  getPostByTag(tag: String) {
    this.tag = tag;
    this.postContentMode = 'list';
    this.posts = null;
    this.http.get(`${environment.apiUrl}/posts?type=tag&name=${this.tag}`).subscribe(data => {
      this.currentPage = data['current_page'] - 1;
      this.numPages = data['num_pages'];
      this.posts = data['results'];
      this.searchMode = 'tag';
      this.paginator.slide(this.currentPage, 0, this.numPages);
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
