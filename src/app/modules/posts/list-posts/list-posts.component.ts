import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as postActions from '../state/post.actions';
import * as fromPost from '../state/post.reducer';
import { Post } from '../../../models/post';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';

const Get_Posts = gql`
  query ($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        body
      }
      meta {
        totalCount
      }
    }
  }
`;

const deletePost = gql`
  mutation ($id: ID!) {
    deletePost(id: $id)
  }
`;

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss'],
})
export class ListPostsComponent implements OnInit {
  posts: Array<Post[]> = [];
  error$!: Observable<String>;
  readonly post$: Observable<any> = this.store.select(fromPost.getPosts);

  constructor(
    private store: Store<fromPost.AppState>,
    private router: Router,
    private apollo: Apollo
  ) {}

  ngOnInit(): void {
    this.store.dispatch(postActions.loadPosts());
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
    if (confirm('Are You Sure You want to Delete the User?')) {
      this.apollo
        .mutate({
          mutation: deletePost,
          variables: {
            input: {
              id: data.id,
            },
          },
        })
        .subscribe(({ data }) => {
          console.log('data, data.Save ====>', data);
        });

      // this.store.dispatch(postActions.deletePost({ id: data.id }));
    }
  }

  // getPostsList() {
  //   this.apollo
  //     .watchQuery<any>({
  //       query: Get_Posts,
  //     })
  //     .valueChanges.subscribe(({ data }) => {
  //       this.posts = data.posts.data;
  //     });
  // }
}
