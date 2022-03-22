import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as postActions from '../state/post.actions';
import * as fromPost from '../state/post.reducer';
import { Post } from '../../../models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss'],
})
export class ListPostsComponent implements OnInit {
  posts$!: Observable<Post[]>;
  error$!: Observable<String>;
  constructor(private store: Store<fromPost.AppState>, private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(postActions.loadPosts());
    this.posts$ = this.store.pipe(select(fromPost.getPosts));
    this.error$ = this.store.pipe(select(fromPost.getError));
  }
  editPost(data: Post) {
    this.router.navigate(['posts/edit/' + data.id]);
    this.store.dispatch(postActions.loadPost({ payload: data.id }));
  }
  addPost() {
    this.router.navigate(['posts/add']);
  }
  deletePost(data: Post) {
    if (confirm("Are You Sure You want to Delete the User?")) {
      this.store.dispatch(postActions.deletePost({ id : data.id }));
    }
  }
}