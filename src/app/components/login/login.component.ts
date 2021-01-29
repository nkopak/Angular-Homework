import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from '../../servises/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = new FormControl('');
  password = new FormControl('');
  myForm = new FormGroup({
    username: this.username,
    password: this.password
  });

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  xxx(myForm: FormGroup): any {
    for (const user of this.loginService.users) {
      if (this.myForm.controls.username.value === user.username && this.myForm.controls.password.value === user.password){
        console.log('Login successful!');
        return {error: false};
      }
      else {
        return {error: true};
      }
    }
    console.log(this.myForm);
  }
}
