import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ECategory, IGames, IJackpot } from '../games.model';
import { getAllGames } from '../store/selectors/dashboard.selectors';
import * as jackpotActions from '../store/actions/jackpot.actions';
import * as jackpotSelector from '../store/selectors/jackpot.selectors';
import { distinctUntilChanged, filter } from 'rxjs';

@Component({
  selector: 'app-dashboard-games',
  templateUrl: './dashboard-games.component.html',
  styleUrls: ['./dashboard-games.component.scss'],
})
export class DashboardGamesComponent {
  games$ = this.store.select(getAllGames);
  gamesList: IGames[];
  jackpotsList: IJackpot[];
  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.store.dispatch(jackpotActions.loadJackpots());
  }

  ngAfterViewInit() {
    this.store
      .select(jackpotSelector.deduceJackpots)
      .pipe()
      .subscribe((jackpotDetails) => {
        console.log(jackpotDetails);
      });
    this.games$.pipe().subscribe((gameDetails) => {
      this.gamesList = gameDetails;
    });
  }

  public trackBy(index: number): number {
    return index;
  }
}
