import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import * as fromComponents from './components';
import { TitleH2Component } from './components/titles/title-h2/title-h2.component';
import { CardUserComponent } from './components/cards/card-user/card-user.component';



@NgModule({imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [...fromComponents.component, TitleH2Component, CardUserComponent],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ...fromComponents.component
  ]
  

})
export class SharedModule { }
