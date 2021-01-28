import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // user = {name: 'petro', age: 123};
  //
  // submit(form: NgForm): void{
  //   console.log(form);
  // }
  name = new FormControl('',
    [Validators.required,
      Validators.minLength(10), this.customFukcValidator]);
  age = new FormControl(123);
  myForm = new FormGroup({
    name: this.name,
    age: this.age
  });

  xxx(myForm: FormGroup): void {
    console.log(myForm);
  }
  customFukcValidator(inputData: AbstractControl): any {

  }
}
