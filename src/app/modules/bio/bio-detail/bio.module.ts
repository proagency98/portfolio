import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import {  BiografiaRoutingModule } from './bio-routing.module';
import { BioDetailComponent } from './bio-detail.component';
import { BandaPrincipalComponent } from '@app/shared/components/banda-principal/banda-principal.component';
import { TemplateIdCardComponent } from '@app/shared/components/template-id-card/template-id-card.component';
import { BoxServicesComponent } from '@app/shared/components/box-services/box-services.component';
import { ProyectosComponent } from '@app/shared/components/proyectos/proyectos.component';
import { HabilidadesComponent } from '@app/shared/components/habilidades/habilidades.component';
import { BeneficiosComponent } from '@app/shared/components/beneficios/beneficios.component';
import { BandaOpinionesComponent } from '@app/shared/components/banda-opiniones/banda-opiniones.component';
import { CardsOpinionesComponent } from '@app/shared/components/cards-opiniones/cards-opiniones.component';
import { EmpresasComponent } from '@app/shared/components/empresas/empresas.component';
import { LlamadaComponent } from '@app/shared/components/llamada/llamada.component';
import { RedesComponent } from '@app/shared/components/redes/redes.component';



@NgModule({
  declarations: [
    BioDetailComponent,
    BandaPrincipalComponent,
    TemplateIdCardComponent,
    BoxServicesComponent,
    ProyectosComponent,
    HabilidadesComponent,
    BeneficiosComponent,
    BandaOpinionesComponent,
    CardsOpinionesComponent,
    EmpresasComponent,
    LlamadaComponent,
    RedesComponent
    
  ],
  imports: [
    SharedModule,
    BiografiaRoutingModule
    
  ]
})
export class BioModule { }
