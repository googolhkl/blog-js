import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';


import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './/app-routing.module';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { ResumeComponent } from './resume/resume.component';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AboutComponent,
    BlogSidebarComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
