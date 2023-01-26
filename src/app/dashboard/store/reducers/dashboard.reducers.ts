import { EntityState } from '@ngrx/entity';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer } from '@ngrx/store';
import { on } from '@ngrx/store';
import { IGames, IJackpot } from '../../games.model';
import { dashboardActionTypes } from '../actions/dashboard.actions';

export interface GamesState extends EntityState<IGames> {
  gamesLoaded: boolean;
}

export const adapter: EntityAdapter<IGames> = createEntityAdapter<IGames>();

export const initialState = adapter.getInitialState({
  gamesLoaded: false,
});

export const dashboardReducer = createReducer(
  initialState,
  on(dashboardActionTypes.gamesLoaded, (state, action) => {
    return adapter.setAll(action.allGames, { ...state, gamesLoaded: true });
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();
