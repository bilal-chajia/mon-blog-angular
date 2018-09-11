import {Component, Input} from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;
  @Input() postIndex: number;

  constructor(private postService: PostsService) {
  }


  loveIt() {
    this.postLoveIts++;
  }

  disloveIt() {
    this.postLoveIts--;
  }

  onDelete(i: number) {
    this.postService.deletePost(i);
    this.postService.emitPostsSubject();
  }

}
