import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [
    UserDetailComponent,
    UserListComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
