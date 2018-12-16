import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'data-driven',
  templateUrl: './data-driven.component.html',
  styles: []
})
export class DataDrivenComponent implements OnInit {
  myForm: FormGroup;
  genders = [
    'male',
    'female'
  ];

  constructor(private fb: FormBuilder) { 
    this.myForm = fb.group({
      'userData': fb.group({
        'username': ['Ujjwol', [Validators.required, this.exampleValidator]],
        'email': ['', [Validators.required, Validators.email]]
      }),
      'password': ['', [Validators.required, this.asyncExampleValidator]],
      'gender': ['male']
    })
  }

  onSubmit() {
    console.log(this.myForm);
  }

  exampleValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Example') {
      return { example: true };
    }
    return null;
  }

  asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'Example') {
            resolve({ 'invalid': true });
          } else {
            resolve(null);
          }
        }, 1000);
      }
    );
    return promise;
  }

  ngOnInit() {
  }

}
