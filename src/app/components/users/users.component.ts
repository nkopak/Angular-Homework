import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Post} from '../../../models/Post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  posts: Post[];
  singlePost: Post;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
  this.postService.getPosts()
    .subscribe(value => this.posts = value);
  }

  getBubble(post: Post): void {
    this.singlePost = post;
  }

}
