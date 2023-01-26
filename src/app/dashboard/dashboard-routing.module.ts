import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardGamesComponent } from './dashboard-games/dashboard-games.component';
import { RouterModule, Routes } from '@angular/router';
import { NewGamesComponent } from './new-games/new-games.component';
import { GameResolver } from './games.resolver';

const routes: Routes = [
  {
    path: '',
    component: DashboardGamesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: DashboardGamesComponent,
        resolve: {
          games: GameResolver,
          // jackpots: JackpotResolver,
        },
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
