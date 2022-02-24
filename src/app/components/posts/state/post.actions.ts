import { createAction, props } from '@ngrx/store';

import { Update } from '@ngrx/entity';

import { Post } from '../../../modal/post';

export enum ActionTypes {
  LOAD_POSTS = '[Post] Load Posts',
  LOAD_POSTS_SUCCESS = '[Post] Load Posts Success',
  LOAD_POSTS_FAIL = '[Post] Load Posts Fail',
  CREATE_POST = '[Post] Create Post',
  CREATE_POST_SUCCESS = '[Post] Create Post Success',
  CREATE_POST_FAIL = '[Post] Create Post Fail',
  LOAD_POST = '[Post] Load Post',
  LOAD_POST_SUCCESS = '[Post] Load Post Success',
  LOAD_POST_FAIL = '[Post] Load Post Fail',
}

export const loadPosts = createAction(ActionTypes.LOAD_POSTS);
export const loadPostsSuccess = createAction(
  ActionTypes.LOAD_POSTS_SUCCESS,
  props<{ payload: Post[] }>()
);
export const LoadPostsFail = createAction(
  ActionTypes.LOAD_POSTS_FAIL,
  props<{ payload: string }>()
);
export const CreatePost = createAction(
  ActionTypes.CREATE_POST,
  props<{ payload: Post }>()
);
export const createPostSuccess = createAction(
  ActionTypes.CREATE_POST_SUCCESS,
  props<{ payload: Post }>()
);
export const createPostFail = createAction(
  ActionTypes.CREATE_POST_FAIL,
  props<{ payload: string }>()
);
export const loadPost = createAction(
  ActionTypes.LOAD_POST,
  props<{ payload: number }>()
);
export const loadPostSuccess = createAction(
  ActionTypes.LOAD_POST_SUCCESS,
  props<{ payload: Post }>()
);
export const loadPostFail = createAction(
  ActionTypes.LOAD_POST_SUCCESS,
  props<{ payload: string }>()
);
