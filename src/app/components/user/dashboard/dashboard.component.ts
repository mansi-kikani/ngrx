import { Component, OnInit } from '@angular/core';
import { getUserData } from '../../../_selectors/auth.selectors';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { userData } from 'src/app/_actions/user.actions';
import { MainService } from 'src/app/_services/main.service';
import { UserData } from 'src/app/modal/user';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  // data$!: Observable<UserData[]>;
  data$ = this.store.select(getUserData);
  constructor(
    private store: Store<{ users: UserData[] }>,
    private mainService: MainService
  ) {}

  ngOnInit(): void {
    this.mainService.getUsers().subscribe((users) => {
      console.log(`users`, users);
      this.store.dispatch(userData({ users: users as UserData[] }));
    });
  
    console.log(`this.data$`, this.data$);
  }
}
