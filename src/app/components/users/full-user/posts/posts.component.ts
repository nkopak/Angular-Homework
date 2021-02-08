import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../../models/post';
import {PostService} from '../../../../services/post/post.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() post: Post[];
  constructor(private postService: PostService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  showPosts(): void {
    this.router.navigate([this.post.id], {relativeTo: this.activatedRoute, state: this.post});
  }
}
