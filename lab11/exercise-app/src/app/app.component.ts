import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise-app';
  
  counterReadFromChild: number;

  //create a property ComponentCounterValue and bind/pass this to your Counter component input
  ComponentCounterValue = 5;

  readCounterValueFromChild(value) {
    this.counterReadFromChild = value;
    this.ComponentCounterValue = value;
    console.log(value);
  }
}
