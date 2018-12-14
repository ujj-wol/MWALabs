import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent{
  title = 'exercise';

  constructor(public myDataService: DataService) {
    myDataService.getOnlineData()
      .subscribe(data => {
        localStorage.setItem('userData', JSON.stringify(data));
        console.log(myDataService.getCachedData());
      });

  }

// ngOnInit(){
//   this.myDataService.getOnlineData()
//       .subscribe(data => {
//         localStorage.setItem('userData', JSON.stringify(data));
//         console.log(this.myDataService.getCachedData());
//       });
// }

}
