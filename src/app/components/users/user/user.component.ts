import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../models/User';
import {UserService} from '../../../services/user.service';
import {PostService} from '../../../services/post.service';
import {Post} from 'src/app/models/Post';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User;

  constructor() {
  }

  @Output()
  bumble = new EventEmitter<number>();

  ngOnInit(): void {
  }


  getPosts(user: User): void {
    this.bumble.emit(user.id);
  }
}
