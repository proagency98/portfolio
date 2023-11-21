import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    children: [
      {
        path:'',
        loadChildren: () => import('@modules/bio/bio-detail/bio.module').then((m) => m.BioModule)
      },
      {
        path:'init',
        loadChildren: () => import('@modules/card-identity/card-identity.module').then((m) => m.CardIdentityModule)
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
