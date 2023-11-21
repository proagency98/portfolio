import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioDetailComponent } from './bio-detail/bio-detail.component';

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
export class BioRoutingModule { }
