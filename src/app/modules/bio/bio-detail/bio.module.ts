import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import {  BiografiaRoutingModule } from './bio-routing.module';
import { BioDetailComponent } from './bio-detail.component';
import { BandaPrincipalComponent } from '@app/shared/components/banda-principal/banda-principal.component';



@NgModule({
  declarations: [
    BioDetailComponent,
    BandaPrincipalComponent
    
  ],
  imports: [
    SharedModule,
    BiografiaRoutingModule
    
  ]
})
export class BioModule { }
