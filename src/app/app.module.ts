import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { authReducer } from './_reducers/auth.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule  } from '@ngrx/effects';
import { UserEffects } from './_effects/user.effects';
import { HttpClientModule } from '@angular/common/http';
import { FakeBackendInterceptor } from './_helpers/fake-backend';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ user: authReducer }),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [FakeBackendInterceptor],
  bootstrap: [AppComponent],
})
export class AppModule {}
