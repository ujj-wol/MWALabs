import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: 
  `
    <p>
      counter works!
    </p>
    <button (click)="increment()">+</button>
    {{ counterValue }}
    <button (click)="decrement()">-</button>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  counterValue = 0;
  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.counterValue++;
    return false; //tells browser not to propagate the event upwards
  }

  decrement() {
    this.counterValue--;
    return false;
  }

}
