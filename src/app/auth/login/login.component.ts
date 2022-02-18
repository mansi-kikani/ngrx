import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from 'src/app/_actions/login.actions';
import { getUserData } from '../../_selectors/auth.selectors';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  
  constructor(private store: Store<any>, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

 
    
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const payload = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };
    this.store.dispatch(login({ user: payload }));
  }
}
