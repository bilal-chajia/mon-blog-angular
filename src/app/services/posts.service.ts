import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Post} from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsSubject = new Subject<Post[]>();

  private posts = [
    {title: 'post 1', content: ' observables can take the place of event handlers. ', loveIts: 1, createdAt: new Date()},
    {title: 'post 2', content: ' observables can take the place of event handlers. ', loveIts: -2, createdAt: new Date()},
    {title: 'post 3', content: ' observables can take the place of event handlers. ', loveIts: 4, createdAt: new Date()},
    {title: 'post 4', content: ' observables can take the place of event handlers. ', loveIts: 5, createdAt: new Date()}
  ];

  constructor() {
  }

  emitPostsSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.emitPostsSubject();
  }

  deletePost(i: number) {
    this.posts.splice(i, 1);
    this.emitPostsSubject();
  }


}
