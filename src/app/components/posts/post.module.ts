import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule, Actions } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { PostsRoutingModule } from './posts-routing.module';

import { postReducer } from './state/post.reducer';
import { CustomerEffect } from './state/post.effects';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostsComponent } from './posts.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [ListPostsComponent, AddPostComponent, PostsComponent, EditPostComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('posts', postReducer),
    EffectsModule.forFeature([CustomerEffect]),
    NgbModule
  ],
})
export class PostModule {}
