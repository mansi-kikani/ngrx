import { createAction, props } from '@ngrx/store';

import { Update } from '@ngrx/entity';

import { Post } from '../../../models/post';

/* LOAD POST ACTIONS */
export const loadPosts = createAction('[ List Post] Load Posts');  /* here, I use category name as component page. */
export const loadPostsSuccess = createAction(
  '[List Post] Load Posts Success',
  props<{ payload: Post[] }>()
);
export const LoadPostsFail = createAction(
  '[List Post] Load Posts Fail',
  props<{ payload: string }>()
);

/* CREATE POST ACTIONS */
export const createPost = createAction(
  '[ Add Post] Create Post',
  props<{ payload: Post }>()
);
export const createPostSuccess = createAction(
  '[Add Post] Create  Success',
  props<{ payload: Post }>()
);
export const createPostFail = createAction(
  '[Add Post] Create  Fail',
  props<{ payload: string }>()
);

/* GET POST BY ID ACTIONS */
export const loadPost = createAction(
  '[GET POST API] Load Post data',  /* here, I use category name as backend API */
  props<{ payload: number }>()
);
export const loadPostSuccess = createAction(
  '[GET POST API] Load Post data Success',
  props<{ payload: Post }>()
);
export const loadPostFail = createAction(
  '[GET POST API] Load Post data Fail',
  props<{ payload: string }>()
);

/* DELETE POST ACTIONS */
export const deletePost = createAction(
  '[Delete Post] Delete post data',
  props<{ id: number }>()
);
export const deletePostSuccess = createAction(
  '[ Delete Post] Delete post data Success',
  props<{ id: number }>()
);
export const deletePostFail = createAction(
  '[Delete Post] Delete post data Fail',
  props<{ payload: string }>()
);

/* UPDATE POST ACTIONS */
export const updatePost = createAction(
  '[Update Post] Update Post data',
  props<{ payload: Post }>()
);
export const updatePostSuccess = createAction(
  '[Update Post] Update Post data success',
  props<{ payload: Update<Post> }>()
);
export const updatePostFail = createAction(
  '[Update Post] Update Post data fail',
  props<{ payload: string }>()
);
