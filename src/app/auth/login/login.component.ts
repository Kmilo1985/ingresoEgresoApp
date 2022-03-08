import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as ui from 'src/app/shared/ui.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public cargando: boolean = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('ui').subscribe(ui => {
      (ui: any) => this.cargando = ui.isLoading;
      console.log('subscribe');

    }
    )
  }

  public login() {
    this.store.dispatch(ui.isLoading());
    setTimeout(() => {
      this.store.dispatch(ui.stopLoading());
    }, 5000);
  }

}
