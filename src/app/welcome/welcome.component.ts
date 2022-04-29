import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login, logout } from '../store/actions';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  authenticationStatus$: Observable<boolean>;

  constructor(private store: Store<{ authentication: boolean }>) {
    this.authenticationStatus$ = store.select('authentication');
  }

  public onUserLogin(): void {
    this.store.dispatch(login());
  }

  public onUserLogout(): void {
    this.store.dispatch(logout());
  }
}
