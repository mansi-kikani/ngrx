import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as userActions from '../_actions';
import { MainService } from '../_services/main.service';
@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private mainService: MainService) {}

  userLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.login),
      exhaustMap((action) =>
        this.mainService.login(action.user).pipe(
          map((response) => userActions.loginSuccess(response)),
          catchError((error: any) => of(userActions.loginFailure(error)))
        )
      )
    )
  );

  userSignup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.signup),
      exhaustMap((action) =>
        this.mainService.signup(action.user).pipe(
          map((response) => userActions.signupSuccess(response)),
          catchError((error: any) => of(userActions.signupFailure(error)))
        )
      )
    )
  );
}
