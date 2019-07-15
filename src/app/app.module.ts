import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GiphyComponent } from './giphy/giphy.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'giphy', component: GiphyComponent },
  { path: '', redirectTo:'/home',  pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GiphyComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
