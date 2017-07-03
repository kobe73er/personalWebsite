import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BlogComponent} from './blog/blog.component';
import {SigninComponent} from './signin/signin.component';

import {PhotoGuard} from './photo2/photo.guard';
import {AuthService} from './service/auth.service'
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NotAllowedPageComponent} from './not-allowed-page/not-allowed-page.component';
import {Photo2Component} from './photo2/photo2.component';
import { ResumeComponent } from './resume/resume.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'photo2', component: Photo2Component, canActivate: [PhotoGuard]},
  {path: 'blog', component: BlogComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'notAllowedPage', component: NotAllowedPageComponent},
  // {path: 'hero/:id', component: Detail},
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    BlogComponent,
    SigninComponent,
    PageNotFoundComponent,
    NotAllowedPageComponent,
    Photo2Component,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [PhotoGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
