import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavPortfolioLuisComponent } from './nav-portfolio-luis/nav-portfolio-luis.component';

@NgModule({
  declarations: [
    AppComponent,
    NavPortfolioLuisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
