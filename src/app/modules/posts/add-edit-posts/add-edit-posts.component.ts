import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as postActions from '../state/post.actions';
import * as fromPost from '../state/post.reducer';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { gql } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { Post } from 'src/app/models/post';
const Create_Posts = gql`
mutation (
  $input: CreatePostInput!
) {
  createPost(input: $input) {
    id
    title
    body
  }
}
`;
@Component({
  selector: 'app-add-edit-posts',
  templateUrl: './add-edit-posts.component.html',
  styleUrls: ['./add-edit-posts.component.scss']
})
export class AddEditPostsComponent implements OnInit {
  form: FormGroup;
  id!: string;
  isAddMode!: boolean;
  submitted: boolean = false;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromPost.AppState>,
    private toastr: ToastrService,
    private apollo: Apollo
  ) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      userId: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    if (!this.isAddMode) {
      this.store.dispatch(postActions.loadPost({ payload: parseInt(this.id) }));
      const post$ = this.store.select(fromPost.getCurrentPost);

      post$.subscribe((post) => {
        if (post) {
          this.form.patchValue({
            title: post.title,
            userId: post.userId,
            body: post.body,
            id: post.id,
          });
        }
      });
    }
  }

  onSubmit() {
    const newPost : Post = {
      id: this.form.value.id,
      userId: 0,
      title: this.form.value.title,
      body: this.form.value.body,
    };
    if (!this.isAddMode) {
      this.store.dispatch(postActions.updatePost({ payload: newPost }));
      this.toastr.success("success", "Post updated Successfully!");
    }
    else {
      // this.apollo
      //   .mutate({
      //     mutation: Create_Posts,
      //     variables: {
      //       input: {
      //         title: this.form.value.title,
      //         body: this.form.value.body,
      //       },
      //     },
      //   })
      //   .subscribe(({ data }) => {
      //     console.log('data, data.Save ====>', data);
      //   });

        // For NGRX
      this.store.dispatch(postActions.createPost({ payload: newPost }));
      this.toastr.success("success", "Post added Successfully!");
    }
    this.router.navigate(['posts']);
    this.form.reset();
  }

  get f() {
    return this.form.controls;
  }

}
