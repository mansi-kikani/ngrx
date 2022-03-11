import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap, concatMap, switchMap } from 'rxjs/operators';

import { MainService } from '../../../_services/main.service';
import * as postActions from './post.actions';
import { Post } from '../../../models/post';
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class CustomerEffect {
  constructor(private actions$: Actions, private mainService: MainService, private modalService: NgbModal) { }

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postActions.ActionTypes.LOAD_POSTS),
      mergeMap((action: postActions.ActionTypes.LOAD_POSTS) => this.mainService.getPosts().pipe(
        map((posts: Post[]) => postActions.loadPostsSuccess({ payload: posts })),
        catchError((error) => of(postActions.LoadPostsFail({ payload: error }))),
      ))
    )
  );

  loadPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postActions.ActionTypes.LOAD_POST),
      mergeMap((action: postActions.ActionTypes.LOAD_POST) => this.mainService.getPostById(action).pipe(
        map((post: Post) => postActions.loadPostSuccess({ payload: post })),
        catchError((error) => of(postActions.loadPostFail({ payload: error }))),
      ))
    )
  );

  createPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postActions.ActionTypes.CREATE_POST),
      map((action: Post) => action),
      mergeMap((action: Post) =>
        this.mainService.createPost(action).pipe(
          map((newPost: Post) => postActions.createPostSuccess({ payload: newPost })),
          // tap((res) => console.log(`res`, res)),
          catchError(err => of(postActions.createPostFail(err)))
        )
      )
    ));

  deletePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(postActions.deletePost),
      switchMap((action) => {
        return this.mainService.deletePost(action).pipe(
          map((data) => {
            return postActions.deletePostSuccess({ payload: action.payload });
          })
        );
      })
    );
  });

  updatePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(postActions.updatePost),
      switchMap((action) => {
        return this.mainService.updatePost(action.payload).pipe(
          map((data) => {
            const updatedPost: Update<Post> = {
              id: action.payload.id,
              changes: data,
            };
            return postActions.updatePostSuccess({ payload: updatedPost });
          })
        );
      })
    );
  });
}
