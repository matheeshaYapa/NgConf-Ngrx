import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../app.state';

@Component({
  selector: 'app-banana',
  templateUrl: './banana.component.html',
  styleUrls: ['./banana.component.scss']
})
export class BananaComponent implements OnInit {

  title = 'My Ngrx Banana App';
  banana$: Observable<any>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.newBanana();
    this.banana$ = this.store.pipe(
    );
  }

  newBanana() {

  }

}
