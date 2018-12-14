import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-users',
  template: `
    <ul>
      <li *ngFor='let user of usersData.results; let i = index;'><a [routerLink]="[i]"> {{i+1}}. {{ user.name.first + " " + user.name.last }} </a></li>
    </ul>
    <router-outlet></router-outlet>
    <p>This is from users component!</p>
  `,
  styles: []
})
export class UsersComponent implements OnInit {
  private usersData;

  constructor(private myDataService: DataService) {
    this.usersData = myDataService.getCachedData();
  }

  ngOnInit() {

  }

}
//let fullName = user.name.first + user.name.last