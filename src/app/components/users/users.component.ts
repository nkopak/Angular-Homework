import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {IUser} from '../../interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(value => this.users = value);
  }

  ngOnInit(): void {
  }

}
