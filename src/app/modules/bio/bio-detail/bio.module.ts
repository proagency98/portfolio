import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import {  BiografiaRoutingModule } from './bio-routing.module';
import { BioDetailComponent } from './bio-detail.component';
import { BandaPrincipalComponent } from '@app/shared/components/banda-principal/banda-principal.component';
import { TemplateIdCardComponent } from '@app/shared/components/template-id-card/template-id-card.component';
import { BotonCvComponent } from '@app/shared/components/boton-cv/boton-cv.component';



@NgModule({
  declarations: [
    BioDetailComponent,
    BandaPrincipalComponent,
    TemplateIdCardComponent,
    BotonCvComponent
    
  ],
  imports: [
    SharedModule,
    BiografiaRoutingModule
    
  ]
})
export class BioModule { }
