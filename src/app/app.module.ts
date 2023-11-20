import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavPortfolioLuisComponent } from './nav-portfolio-luis/nav-portfolio-luis.component';
import { BioPortfolioLuisComponent } from './bio-portfolio-luis/bio-portfolio-luis.component';
import { PrincipalViewComponent } from './principal-view/principal-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavPortfolioLuisComponent,
    BioPortfolioLuisComponent,
    PrincipalViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
