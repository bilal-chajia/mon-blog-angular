import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PostListComponent} from './post-list/post-list.component';
import {PostListItemComponent} from './post-list-item/post-list-item.component';
import {PostsService} from './services/posts.service';
import {NewPostComponent} from './new-post/new-post.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const appRoue: Routes = [
  {path: '', component: PostListComponent},
  {path: 'posts', component: PostListComponent},
  {path: 'new', component: NewPostComponent},
  {path: '**', redirectTo: 'posts'}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoue),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
