import { NgModule } from '@angular/core';
import { CardIdentityComponent } from './card-identity.component';
import { SharedModule } from '@app/shared/shared.module';
import { TemplateIdCardComponent } from '@app/shared/components/template-id-card/template-id-card.component';
import { CardBioIdentityModule } from './identity-routing.module';



@NgModule({
  declarations: [
    CardIdentityComponent,
    TemplateIdCardComponent
  ],
  imports: [
    SharedModule,
    CardBioIdentityModule
  ]
})
export class CardIdentityModule { }
