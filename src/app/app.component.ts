import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Homework';
  user = {name: 'yura', age: 123};

  name = new FormControl( '', [
    Validators.required,
    // Validators.minLength(10),
    this.customValidator
  ]);
  age = new FormControl();

  myForm = new FormGroup({
    name: this.name,
    age: this.age
  });

  // submit(form: NgForm): void{
  //   console.log(form);
  // }

  submit(myForm: FormGroup): void{
    console.log(myForm);
  }

  customValidator(inputData: AbstractControl): any {
    if(inputData.value === 'fuck'){
      return {error: true, msg: '123'};
    } else {
      return null
    }
  }
}
