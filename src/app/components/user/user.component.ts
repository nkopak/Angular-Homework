import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../../../models/Post';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  post: Post;

  @Output()
  bubbleUp = new EventEmitter<Post>();
  constructor() { }

  ngOnInit(): void {
  }

  getPostInfo(post: Post): void{
    this.bubbleUp.emit(post);
  }

}
