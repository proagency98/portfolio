import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioDetailComponent } from './bio-detail.component';
import { TemplateIdCardComponent } from '@app/shared/components/template-id-card/template-id-card.component';

const routes: Routes = [
  {
    path: '',
    component: BioDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiografiaRoutingModule { }
