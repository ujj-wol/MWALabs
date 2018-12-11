import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: 
  `
    <p>
      counter works!
    </p>
    <button (click)="decrement()">-</button>
      {{ counterValue }}
    <button (click)="increment()">+</button>

    <h4>ComponentCounterValue passed from Parent: {{counter}}</h4>
  `,
  //inputs: ['counter'],  //can put with decoration inside the class
  //outputs: ['counterChange'],
  styles: []
})
export class CounterComponent implements OnInit {

  counterValue;  //this is set from parent (see ngOnInit())

  @Input() counter: number;
  @Output() counterChange: EventEmitter<number>;

  constructor() { 
    this.counterChange = new EventEmitter();
  }

  ngOnInit() {
    this.counterValue = this.counter;
  }

  increment():boolean {
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
    return false; //tells browser not to propagate the event upwards
  }

  decrement() {
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
    return false;
  }

}
