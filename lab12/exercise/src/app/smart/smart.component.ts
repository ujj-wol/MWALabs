import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styles: []
})
export class SmartComponent implements OnInit {

  // @Input() inputArray:String[];
  inputArray:String[];
  constructor() {
    this.inputArray = ["Modern", "Web", "Applications", "lab12"];
  }

  ngOnInit() {
  }
}
