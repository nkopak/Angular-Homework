import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../../interfaces/post';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: IPost;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
