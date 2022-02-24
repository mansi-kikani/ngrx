import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Post } from 'src/app/modal/post';
import { Store } from '@ngrx/store';
import * as postActions from '../state/post.actions';
import * as fromPosts from '../state/post.reducer';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
  editPostForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store<fromPosts.AppState>
  ) {}

  ngOnInit(): void {
    this.editPostForm = this.fb.group({
      userId: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required],
      id: 1,
    });

    const post$: Observable<Post | undefined> = this.store.select(fromPosts.getCurrentPost);

    post$.subscribe((post) => {
      if (post) {
        this.editPostForm.patchValue({
          title: post.title,
          userId: post.userId,
          body: post.body,
          id: 1,
        });
      }
    });
  }

  editPosts() {}
}
