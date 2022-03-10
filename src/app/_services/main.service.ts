import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Post } from '../models/post';
@Injectable({
  providedIn: 'root',
})
export class MainService {
  private userLoggedIn = new Subject<boolean>();
  private PostsUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient, private router: Router) {
    this.userLoggedIn.next(false);
  }

  setUserLoggedIn(userLoggedIn: boolean) {
    this.userLoggedIn.next(userLoggedIn);
  }

  getUserLoggedIn(): Observable<boolean> {
    return this.userLoggedIn.asObservable();
  }

  login(user: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    return this.http
      .post(`${environment.apiUrl}/auth/login`, JSON.stringify(user), options)
      .pipe(
        map((response: any) => {
          console.log(`response`, response);
          this.router.navigate(['/posts']);
          response;
        }),
        catchError((err) => {
          console.log(err);
          return of([]);
        })
      );
  }
  signup(user: User) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    return this.http
      .post(`${environment.apiUrl}/auth/login`, { user }, options)
      .pipe(
        map((response: any) => response),
        catchError((err) => {
          console.log(err);
          return of([]);
        })
      );
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
    return this.http.delete(`${this.PostsUrl}/${payload.payload}`);
  }
}
