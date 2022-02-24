import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { map, mergeMap, catchError, tap, concatMap } from 'rxjs/operators';

import { MainService } from '../../../_services/main.service';
import * as postActions from './post.actions';
import { Post } from '../../../modal/post';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerEffect {
  constructor(private actions$: Actions, private mainService: MainService) {}

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postActions.loadPosts),
      mergeMap(() => this.mainService.getPosts()),
      map((posts: Post[]) => postActions.loadPostsSuccess({ payload: posts })),
      catchError((error) => of(postActions.LoadPostsFail({ payload: error }))),
      tap(() => {
        // console.log('login done');
      })
    )
  );
  createPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postActions.ActionTypes.CREATE_POST),
      mergeMap((posts: Post) => this.mainService.createPost(posts)),
      map((posts: Post) => postActions.createPostSuccess({ payload: posts })),
      catchError((error) => of(postActions.createPostFail({ payload: error }))),
      tap(() => {
        // console.log('login done');
      })
    )
  );

  // loadPost$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(postActions.ActionTypes.LOAD_POST),
  //     mergeMap((post:Post) => {
  //       console.log(`post`, post);
  //       this.mainService.getPostById(post.payload);
  //     }),
  //     map((posts: Post) => postActions.loadPostSuccess({ payload: posts })),
  //     catchError((error) => of(postActions.loadPostFail({ payload: error }))),
  //     tap(() => {
  //       // console.log('login done');
  //     })
  //   )
  // );
}
