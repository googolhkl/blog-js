import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent},
  { path: 'blog/posts', component: BlogSidebarComponent},
  { path: 'blog/posts/:id', component: BlogSidebarComponent},
  { path: 'about', component: AboutComponent},
  { path: 'resume', component: ResumeComponent},
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
