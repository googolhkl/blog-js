import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {SuiModule, SuiProgressModule} from 'ng2-semantic-ui';

import {DisqusModule} from 'ngx-disqus';

import {AppComponent} from './app.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {AboutComponent} from './about/about.component';
import {AppRoutingModule} from './/app-routing.module';
import {BlogSidebarComponent} from './blog-sidebar/blog-sidebar.component';
import {ResumeComponent} from './resume/resume.component';

import {SafeHtmlPipe} from './pipe.safehtml';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AboutComponent,
    BlogSidebarComponent,
    ResumeComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatProgressBarModule,
    SuiModule,
    SuiProgressModule,
    HttpClientModule,
    DisqusModule.forRoot('googolhkl'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
