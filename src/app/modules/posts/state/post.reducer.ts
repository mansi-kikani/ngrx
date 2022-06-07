import * as postActions from './post.actions';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Post } from 'src/app/models/post';
import * as fromRoot from "../../../store/app-state";
export interface PostState extends EntityState<Post> {
  selectedPostId: number;
  loading: boolean;
  loaded: boolean;
  error: string;
  ids: Array<string>;
}

export interface AppState extends fromRoot.AppState {
  posts: PostState;
}

export const postAdapter: EntityAdapter<Post> = createEntityAdapter<Post>();

export const defaultPost: PostState = {
  ids: [],
  entities: {},
  selectedPostId: 0,
  loading: false,
  loaded: false,
  error: '',
};

export const initialState = postAdapter.getInitialState(defaultPost);



export const postReducer = createReducer(
  initialState,
  on(postActions.loadPostsSuccess, (state, action) => {
    return postAdapter.setAll(action.payload, {
      ...state,
      loading: false,
      loaded: true,
    });
  }),
  on(postActions.loadPostSuccess, (state, action) => {
    return postAdapter.addOne(action.payload, {
      ...state,
      selectedPostId: action.payload.id
    });
  }),
  on(postActions.deletePostSuccess, (state, action) => {
    return postAdapter.removeOne(action.id, state);
  }),

  on(postActions.updatePostSuccess, (state, action) => {
    return postAdapter.updateOne(action.payload, state);
  }),

  on(postActions.LoadPostsFail, (state, action) => {
    return {
      ...state,
      entities: {},
      loading: false,
      loaded: true,
      error: action.payload
    };
  }),

  on(postActions.createPostSuccess, (state, action) => {
    return postAdapter.addOne(action.payload, state);
  }),


  on(postActions.createPostFail, (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  }),

  on(postActions.deletePostFail, (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  }),

  on(postActions.loadPostFail, (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  }),
);
export const { selectAll } = postAdapter.getSelectors();

const getPostFeatureState =
  createFeatureSelector<PostState>('posts');

export const getPosts = createSelector(
  getPostFeatureState,
  postAdapter.getSelectors().selectAll
);
export const getCurrentPostId = createSelector(
  getPostFeatureState,
  (state: PostState) => state.selectedPostId
);

export const getCurrentPost = createSelector(
  getPostFeatureState,
  getCurrentPostId,
  (state: PostState) => state.entities[state.selectedPostId]
);

export const getError = createSelector(
  getPostFeatureState,
  (state: PostState) => state.error
);
