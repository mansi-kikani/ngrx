import { Component, OnInit } from '@angular/core';
import { getUserData } from '../../../_selectors/auth.selectors';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // data$: Observable<string>;
  constructor(private store: Store<any>) {

    // this.data$ = this.store.select(getUserData);
    // console.log(`this.data$`, this.data$)
   }

  ngOnInit(): void {
  }

}
