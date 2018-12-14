import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../service/data.service';

@Injectable({
  providedIn: 'root'
})

//this guard is to check if the requested user is valid before routing to userDetails component. Otherwise redirect to error page
export class UserDetailGuard implements CanActivate {
  constructor(private myDataService: DataService, private myRouter: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
    : Observable<boolean> | Promise<boolean> | boolean {
      console.log(next);
      console.log(state);
      
      if(next.params.id < this.myDataService.getCachedData().results.length)
        return true;
      return this.myRouter.navigate(['error']);
  }
}
