import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import {  BiografiaRoutingModule } from './bio-routing.module';
import { BioDetailComponent } from './bio-detail.component';
import { BandaPrincipalComponent } from '@app/shared/components/banda-principal/banda-principal.component';
import { TemplateIdCardComponent } from '@app/shared/components/template-id-card/template-id-card.component';
import { BotonCvComponent } from '@app/shared/components/boton-cv/boton-cv.component';
import { ServiciosComponent } from '@app/shared/components/servicios/servicios.component';
import { BoxServicesComponent } from '@app/shared/components/box-services/box-services.component';
import { ProyectosComponent } from '@app/shared/components/proyectos/proyectos.component';



@NgModule({
  declarations: [
    BioDetailComponent,
    BandaPrincipalComponent,
    TemplateIdCardComponent,
    BotonCvComponent,
    ServiciosComponent,
    BoxServicesComponent,
    ProyectosComponent
    
  ],
  imports: [
    SharedModule,
    BiografiaRoutingModule
    
  ]
})
export class BioModule { }
