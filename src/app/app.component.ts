import {Component, OnInit} from '@angular/core';
import {Post} from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: Post[];

  ngOnInit(): void {
    this.posts = [
      {title: 'post 1', content: ' observables can take the place of event handlers. ', loveIts: 1, createdAt: new Date()},
      {title: 'post 2', content: ' observables can take the place of event handlers. ', loveIts: -2, createdAt: new Date()},
      {title: 'post 3', content: ' observables can take the place of event handlers. ', loveIts: 4, createdAt: new Date()},
      {title: 'post 4', content: ' observables can take the place of event handlers. ', loveIts: 5, createdAt: new Date()},
      {title: 'post 5', content: ' observables can take the place of event handlers. ', loveIts: 0, createdAt: new Date()},
      {title: 'post 6', content: ' observables can take the place of event handlers. ', loveIts: -1, createdAt: new Date()}
    ];
  }
}
