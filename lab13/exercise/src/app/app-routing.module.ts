import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/userDetails.component';
import { UserDetailGuard } from './guard/user-detail.guard';
import { ErrorComponent } from './error/error.component';

const my_Routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'users', component: UsersComponent },
  // { path: 'users/:id', component: UserDetailsComponent , canActivate: [UserDetailGuard]},
  //instead of above lets do an implemention where userDetailsComponent is the child component of user component
  { path: "users", loadChildren: './users/users.module#UsersModule'},
  { path: 'error', component: ErrorComponent },
  { path: '**', component: ErrorComponent }  //every other route is linked to 404 page
];

@NgModule({
  //regular lazy loading without preloading
  //imports: [RouterModule.forRoot(my_Routes)],
  
  //lazy loading with preloading
  imports: [RouterModule.forRoot(my_Routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
