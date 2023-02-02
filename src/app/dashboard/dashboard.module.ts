import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesService } from './service/games.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  gameFeatureKey,
  gamesReducer,
} from './store/reducers/dashboard.reducers';
import { DashboardEffects } from './store/effects/dashboard.effects';
import { DashboardGamesComponent } from './dashboard-games/dashboard-games.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NewGamesComponent } from './new-games/new-games.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [DashboardGamesComponent, NewGamesComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(gameFeatureKey, gamesReducer),
    EffectsModule.forFeature([DashboardEffects]),
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    ScrollingModule,
    MatTabsModule,
    DashboardRoutingModule,
  ],
  providers: [GamesService],
  exports: [DashboardGamesComponent],
})
export class DashboardModule {}
