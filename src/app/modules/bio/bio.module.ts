import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { BioRoutingModule } from './bio-routing.module';
import { BioDetailComponent } from './bio-detail/bio-detail.component';
import { BandaPrincipalComponent } from '@app/shared/components/banda-principal/banda-principal.component';



@NgModule({
  declarations: [
    BioDetailComponent,
    BandaPrincipalComponent
    
  ],
  imports: [
    SharedModule,
    BioRoutingModule
    
  ]
})
export class BioModule { }
