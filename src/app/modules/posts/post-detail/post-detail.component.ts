import { getPostById } from '../state/post.selector';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-state';
import { Post } from '../../../models/post';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  public post!: Observable<Post | null | undefined>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.post = this.store.select(getPostById);
  }

}
