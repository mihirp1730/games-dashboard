import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameResolver } from './dashboard/games.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard-games',
  },
  {
    path: 'dashboard-games',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [GameResolver],
  exports: [RouterModule],
})
export class AppRoutingModule {}
