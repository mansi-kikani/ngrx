import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { of } from 'rxjs';
import {
  map,
  mergeMap,
  catchError,
  switchMap,
} from 'rxjs/operators';

import { MainService } from '../../../_services/main.service';
import * as postActions from './post.actions';
import { Post } from '../../../models/post';
import { Injectable } from '@angular/core';

@Injectable()
export class PostEffect {
  constructor(
    private actions$: Actions,
    private mainService: MainService
  ) {}

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(postActions.loadPosts),
      switchMap(() => {
        return this.mainService.getPosts().pipe(
          map((posts: Post[]) => {
            return postActions.loadPostsSuccess({ payload: posts });
          }),
          catchError((error) => of(postActions.LoadPostsFail(error)))
        );
      })
    );
  });

  loadPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postActions.loadPost),
      mergeMap((action) =>
        this.mainService.getPostById(action).pipe(
          map((post: Post) => postActions.loadPostSuccess({ payload: post })),
          catchError((error) =>
            of(postActions.loadPostFail({ payload: error }))
          )
        )
      )
    )
  );

  createPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postActions.createPost),
      map((action) => action),
      mergeMap((action) =>
        this.mainService.createPost(action).pipe(
          map((newPost: Post) =>
            postActions.createPostSuccess({ payload: newPost })
          ),
          catchError((err) => of(postActions.createPostFail(err)))
        )
      )
    )
  );

  deletePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(postActions.deletePost),
      switchMap((action) => {
        return this.mainService.deletePost(action).pipe(
          map((data) => {
            return postActions.deletePostSuccess({ id: action.id });
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
