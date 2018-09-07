import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/post';
import {log} from 'util';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() posts: Post[];


  constructor() {
    log(this.posts);
  }

  ngOnInit() {

  }

}
