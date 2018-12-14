import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/userDetails.component';
import { UserDetailGuard } from './guard/user-detail.guard';
import { ErrorComponent } from './error/error.component';

const my_Routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailsComponent , canActivate: [UserDetailGuard]},
  { path: 'error', component: ErrorComponent },
  { path: '**', component: HomeComponent }  //every other route is linked to home component
];

@NgModule({
  imports: [RouterModule.forRoot(my_Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
