import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  template: `
    <h2>User Details</h2>
    <pre>
      {{userData | json}}
    </pre>
    <p>This is from userDetails component!</p>
  `,
  styles: []
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  private userData;
  private id;
  private paramsSubscription;

  constructor(private myDataService: DataService, private route: ActivatedRoute) {
    this.paramsSubscription = route.params
      .subscribe(params => {
        this.id = params['id'];
        // console.log('Id requested: ' + this.id);
        // this.userData = this.myDataService.getCachedData().results[this.id];
      });

  }
  ngOnInit() {
    console.log('Id requested: ' + this.id);
    this.userData = this.myDataService.getCachedData().results[this.id];
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
