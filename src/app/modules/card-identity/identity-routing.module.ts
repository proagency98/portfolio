import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardIdentityComponent } from './card-identity.component';

const routes: Routes = [
  {
    path: '',
    component: CardIdentityComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardBioIdentityModule { }
