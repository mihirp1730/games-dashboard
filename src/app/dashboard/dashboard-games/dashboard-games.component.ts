import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { JHeaderData, EHeaders } from '../headers';
import * as dashboardSelector from '../store/selectors/dashboard.selectors';
import { dashboardActionTypes } from '../store/actions/dashboard.actions';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ECategory, IGames } from '../games.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-games',
  templateUrl: './dashboard-games.component.html',
  styleUrls: ['./dashboard-games.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardGamesComponent {
  @ViewChild('gamesheaderGroup') gamesheaderGroup;
  games$ = this.store.select(dashboardSelector.gamesWithJackpotAmount);
  filteredGames$ = this.store.select(
    dashboardSelector.selectFilteredGames('new')
  );
  jackpotGames$: Observable<IGames[]>;
  JHeader = JHeaderData;
  selectedIndex = EHeaders.New_Games;
  // vm$ = combineLatest([this.games$, this.jackpot$]).pipe(
  //   map(([games, jackpots]) => ({ games, jackpots }))
  // );

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.store.dispatch(dashboardActionTypes.loadGames({ isLoading: true }));
    this.store.dispatch(dashboardActionTypes.loadJackpots({ isLoading: true }));
  }

  public trackBy(index: number): number {
    return index;
  }

  gameHeaderChanged(tabChangeEvent: MatTabChangeEvent): void {
    switch (tabChangeEvent.index) {
      case 0:
        this.filteredGames$ = this.store.select(
          dashboardSelector.selectFilteredGames(ECategory.Top)
        );
        break;
      case 1:
        this.filteredGames$ = this.store.select(
          dashboardSelector.selectFilteredGames(ECategory.New)
        );
        break;
      case 2:
        this.filteredGames$ = this.store.select(
          dashboardSelector.selectFilteredGames(ECategory.Slots)
        );
        break;
      case 3:
        this.filteredGames$ = this.store.select(dashboardSelector.jackpotGames);
        break;
      case 4:
        this.filteredGames$ = this.store.select(
          dashboardSelector.selectFilteredGames(ECategory.Live)
        );
        break;
      case 5:
        this.filteredGames$ = this.store.select(
          dashboardSelector.selectFilteredGames(ECategory.Blackjack)
        );
        break;
      case 6:
        this.filteredGames$ = this.store.select(
          dashboardSelector.selectFilteredGames(ECategory.Roulette)
        );
        break;
      case 7:
        this.filteredGames$ = this.store.select(
          dashboardSelector.selectFilteredGames(ECategory.Table)
        );
        break;
      case 8:
        this.filteredGames$ = this.store.select(
          dashboardSelector.selectFilteredGames(ECategory.Poker)
        );
        break;
      case 9:
        this.filteredGames$ = this.store.select(
          dashboardSelector.selectFilteredGames(ECategory.Other)
        );
        break;
    }
  }
}
