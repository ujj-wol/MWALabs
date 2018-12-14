import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './userDetails.component';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailGuard } from '../guard/user-detail.guard';
import { DataService } from '../service/data.service';
// to implement the parent child components for users and userDetails comp. we need this routes.
// also need to add providers, exports and bootstrap inside @NgModule
const routes: Routes = [
  { path: '', component: UsersComponent},
  {
    path: ':id', component: UserDetailsComponent, canActivate: [UserDetailGuard]  //guard used to divert to error page when invalid id is supplied in params
  }
]

@NgModule({
  declarations: [UsersComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    //RouterModule
    RouterModule.forChild(routes)
  ],
  providers: [{ provide: DataService, useClass: DataService}],
  exports: [UsersComponent, UserDetailsComponent],
  bootstrap: [UsersComponent]
})
export class UsersModule { }
