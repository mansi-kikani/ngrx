import { Injectable } from '@angular/core';
import { Subject, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';
@Injectable({
  providedIn: 'root',
})
export class MainService {
  private userLoggedIn = new Subject<boolean>();
  private PostsUrl = environment.API_URL;
  constructor(private http: HttpClient) {
    this.userLoggedIn.next(false);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.PostsUrl);
  }

  getPostById(data:any): Observable<Post> {
    return this.http.get<Post>(`${this.PostsUrl}/${data.payload}`);
  }

  createPost(payload:any): Observable<Post> {
    return this.http.post<Post>(this.PostsUrl, payload.payload);
  }

  updatePost(Post: Post): Observable<Post> {
    return this.http.patch<Post>(
      `${this.PostsUrl}/${Post.id}`,
      Post
    );
  }

  deletePost(payload: any) {
    return this.http.delete<Post>(`${this.PostsUrl}/${payload.payload}`);
  }
}
