import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostService} from './services/post.service';
import {Post} from './models/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[];

  constructor(private postService: PostService) {
  }

  getId(id: number): void {
    this.postService.getPostsByUsersId(id).subscribe(value => this.posts = value);
  }
}
