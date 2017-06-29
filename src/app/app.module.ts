import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {RouterModule, Routes} from '@angular/router';
import {NaviComponent} from './navi/navi.component';
import {HomeComponent} from './home/home.component';
import {PhotoComponent} from './photo/photo.component';
import {BlogComponent} from './blog/blog.component';
import { SigninComponent } from './signin/signin.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'photos', component: PhotoComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'signin', component: SigninComponent},
  // {path: 'hero/:id', component: Detail},
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  {path: '**', component: HomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,

    NaviComponent,
    HomeComponent,
    PhotoComponent,
    BlogComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
