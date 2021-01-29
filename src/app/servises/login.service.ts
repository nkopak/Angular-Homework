import {Injectable} from '@angular/core';
import {Users} from './users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  users: Users[] = [
    {username: 'andrew', password: '123'},
    {username: 'nastia', password: '123'},
    {username: 'vova', password: '123'},
    {username: 'yura', password: '123'},
    {username: 'yulia', password: '123'},
  ];

  constructor() {
  }

  login(user: Users): boolean {
    return !!this.users.filter(value => JSON.stringify(value) === JSON.stringify(user)).length;
  }
}
