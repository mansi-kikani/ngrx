import { isAuthenticated } from '../../../auth/state/auth.selectors';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../store/app-state';
import { Store } from '@ngrx/store';
import { autoLogout } from 'src/app/auth/state/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated!: Observable<boolean>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.isAuthenticated = this.store.select(isAuthenticated);
  }

  logout(event: Event) {
    event.preventDefault();
    this.store.dispatch(autoLogout());
  }
}
