import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  template: `
    <div>
      {{userData | json}}
    </div>
    <p>This is from userDetails component!</p>
  `,
  styles: []
})
export class UserDetailsComponent implements OnInit {
  private userData;
  private id;

  constructor(private myDataService: DataService, private route: ActivatedRoute ) { 
    route.params.subscribe(params => {this.id = params['id']; 
                            this.userData = myDataService.getCachedData().results[this.id];
                          });
    
  }
  ngOnInit() {
  }

}
