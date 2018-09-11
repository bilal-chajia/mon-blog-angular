import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../models/post';
import {Subscription} from 'rxjs';
import {PostsService} from '../services/posts.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postService: PostsService) {
  }

  ngOnInit(): void {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPostsSubject();

  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
