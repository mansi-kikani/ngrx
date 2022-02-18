import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { MainService } from '../_services/main.service';
import { map, exhaustMap, catchError, tap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { signup, SignupError, SignupSuccess } from '../_actions/signup.actions';
import { login, LoginError, LoginSuccess } from '../_actions/login.actions';
@Injectable()
export class UserEffects {
  constructor(private actions: Actions, private mainService: MainService) {}


  login$ = createEffect(() =>
    this.actions.pipe(
      ofType(login),
      mergeMap((action) => {
        return this.mainService.login(action.user).pipe(
          map((res) => LoginSuccess({ data: res })),
          catchError((error) => of(LoginError({ error }))),
          tap(() => {
            console.log('Login done');
          })
        );
      })
    )
  );


  signup$ = createEffect(() =>
    this.actions.pipe(
      ofType(signup),
      mergeMap((action) => {
        return this.mainService.signup(action.user).pipe(
          map((res) => SignupSuccess({ data: res })),
          catchError((error) => of(SignupError({ error }))),
          tap(() => {
            console.log('signup done');
          })
        );
      })
    )
  );
}
