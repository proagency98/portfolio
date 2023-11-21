import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import * as fromComponents from './components';
import { TitleH2Component } from './components/titles/title-h2/title-h2.component';
import { CardUserComponent } from './components/cards/card-user/card-user.component';
import { RouterLink, RouterModule } from '@angular/router';
import { BioPortfolioLuisComponent } from './components/bio-portfolio-luis/bio-portfolio-luis.component';



@NgModule({imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  declarations: [...fromComponents.component, CardUserComponent, BioPortfolioLuisComponent],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    ...fromComponents.component
  ]
  

})
export class SharedModule { }
