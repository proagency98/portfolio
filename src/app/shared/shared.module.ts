import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import * as fromComponents from './components';
import { RouterModule } from '@angular/router';




@NgModule({imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  declarations: [...fromComponents.component ],
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
