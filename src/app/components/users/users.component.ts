import {HttpClient} from '@angular/common/http';
import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  @Output()
  bumble = new EventEmitter<number>();

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value);
  }

  getId(id: number): void {
    this.bumble.emit(id);
  }
}
