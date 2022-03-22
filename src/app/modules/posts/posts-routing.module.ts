import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditPostsComponent } from './add-edit-posts/add-edit-posts.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostModule } from './post.module';
import { PostsComponent } from './posts.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
  {
    path: 'list',
    component: ListPostsComponent,
  },
  { path: 'add', component: AddEditPostsComponent },
  { path: 'edit/:id', component: AddEditPostsComponent },
  { path: 'detail/:id', component: PostDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
