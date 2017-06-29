import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContentComponent} from './content/content.component';

import {RouterModule, Routes} from '@angular/router';
import { Content2Component } from './content2/content2.component';
import { NaviComponent } from './navi/navi.component';
import { HomeComponent } from './home/home.component';
import { PhotoComponent } from './photo/photo.component';

const appRoutes: Routes = [
  {path: 'content', component: ContentComponent},
  {path: 'home', component: HomeComponent},
  {path: 'photos', component: PhotoComponent},
  // {path: 'hero/:id', component: Detail},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: '**', component: HomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    Content2Component,
    NaviComponent,
    HomeComponent,
    PhotoComponent
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
