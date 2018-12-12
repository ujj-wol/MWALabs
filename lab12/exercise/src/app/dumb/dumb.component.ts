import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
    <li>{{str}}</li>
  `,
  styles: []
})
export class DumbComponent implements OnInit {

  @Input("listItem") str: String;
  constructor() { }

  ngOnInit() {
  }

}
