import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as postActions from '../state/post.actions';
import * as fromPost from '../state/post.reducer';
import { Post } from '../../../modal/post';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss'],
})
export class ListPostsComponent implements OnInit {
  posts$!: Observable<Post[]>;
  error$!: Observable<String>;
  constructor(private store: Store<fromPost.AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(postActions.loadPosts());
    this.posts$ = this.store.pipe(select(fromPost.getPosts));
    this.error$ = this.store.pipe(select(fromPost.getError));
  }
  editPost(data:Post) {
    this.store.dispatch(postActions.loadPost({ payload: data.id }));
  }
  deletePost(customer: Post) {}
}
