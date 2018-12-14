import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {
  private usersData;

  constructor(private myDataService: DataService) {
    this.usersData = this.myDataService.getCachedData();
  }

  ngOnInit() {

  }

}
//let fullName = user.name.first + user.name.last