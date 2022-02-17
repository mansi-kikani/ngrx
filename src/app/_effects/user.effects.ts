// // import { Injectable } from '@angular/core';
// // import { Actions, createEffect, ofType , Effect } from '@ngrx/effects';
// // import { Observable } from 'rxjs/Observable';
// // import { map, exhaustMap, catchError } from 'rxjs/operators';
// // import { of } from 'rxjs';
// // // import * as userActions from '../_actions';
// // import { MainService } from '../_services/main.service';
// // import { AuthActionTypes } from '../_actions/login.actions';
// // @Injectable()
// // export class UserEffects {
// //   constructor(private actions: Actions, private mainService: MainService) {}

// //   // userLogin$ = createEffect(() =>
// //   //   this.actions$.pipe(
// //   //     ofType(userActions.login),
// //   //     exhaustMap((action) =>
// //   //       this.mainService.login(action.user).pipe(
// //   //         map((response) => userActions.loginSuccess(response)),
// //   //         catchError((error: any) => of(userActions.loginFailure(error)))
// //   //       )
// //   //     )
// //   //   )
// //   // );


 

//   @Effect({ dispatch: false })
//   SignUp: Observable<any> = this.actions
//     .ofType(AuthActionTypes.SIGNUP)
//     .map((action: SignUp) => action.payload)
//     .switchMap(payload => {
//       return this.authService.signUp(payload.email, payload.password)
//         .map((user) => {
//           console.log(user);
//           return new SignUpSuccess({token: user.token, email: payload.email});
//         })
//         .catch((error) => {
//           console.log(error);
//           return Observable.of(new SignUpFailure({ error: error }));
//         });
//     });
// }
