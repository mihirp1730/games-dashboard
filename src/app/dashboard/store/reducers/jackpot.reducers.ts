import { createReducer } from '@ngrx/store';
import { on } from '@ngrx/store';
import {
  jackpotsLoaded,
  jackpotsLoadedFails,
  loadJackpots,
} from '../actions/jackpot.actions';
import { initialState, IJackpotState } from '../jackpot.state';

export const jackpotFeatureKey = 'jackpot-key';

const _jackpotReducer = createReducer(
  initialState,
  on(loadJackpots, (state): IJackpotState => {
    return {
      ...state,
    };
  }),
  on(jackpotsLoaded, (state, { jackpots }): IJackpotState => {
    return {
      ...state,
      jackpots,
    };
  }),
  on(jackpotsLoadedFails, (state): IJackpotState => {
    return {
      ...state,
    };
  })
);

export function jackpotsReducer(state, action) {
  return _jackpotReducer(state, action);
}
