import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { setLoadingSpinner } from 'src/app/shared/shared.actions';
import { signup } from '../state/auth.actions';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private store: Store<any>, private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void { }

  get f(){
    return this.signupForm.controls;
  }
  onSubmit(): void {
    if (!this.signupForm.valid) {
      return;
    }

    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;

    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(signup({ email, password }));
  }
}
