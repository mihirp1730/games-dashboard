import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesService } from './service/games.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { dashboardReducer } from './store/reducers/dashboard.reducers';
import {
  jackpotFeatureKey,
  jackpotsReducer,
} from './store/reducers/jackpot.reducers';
import { DashboardEffects } from './store/effects/dashboard.effects';
import { JackpotsEffects } from './store/effects/jackpot.effects';
import { DashboardGamesComponent } from './dashboard-games/dashboard-games.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NewGamesComponent } from './new-games/new-games.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DashboardGamesComponent, NewGamesComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('games', dashboardReducer),
    StoreModule.forFeature(jackpotFeatureKey, jackpotsReducer),
    EffectsModule.forFeature([DashboardEffects]),
    EffectsModule.forFeature([JackpotsEffects]),
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    ScrollingModule,
    DashboardRoutingModule,
  ],
  providers: [GamesService],
  exports: [DashboardGamesComponent],
})
export class DashboardModule {}
