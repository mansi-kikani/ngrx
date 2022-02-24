import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/modal/post';
import { Store, State, select } from '@ngrx/store';
import * as postActions from '../state/post.actions';
import * as fromPost from '../state/post.reducer';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  addPostForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store<fromPost.AppState>
  ) {
    this.addPostForm = this.fb.group({
      userId: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  createPost() {
    const newPost = {
      id: 1,
      userId: this.addPostForm.value.userId,
      title: this.addPostForm.value.title,
      body: this.addPostForm.value.title,
    };

    this.store.dispatch(postActions.CreatePost({ payload: newPost }));

    this.addPostForm.reset();
  }
}
