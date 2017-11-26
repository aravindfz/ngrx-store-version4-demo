import { ActionReducerMap } from '@ngrx/store';
import { AppStore } from './app-store.interface';
import * as deviceReducer from './reducers/devices.reducer';

export const reducers: ActionReducerMap<AppStore> = {
    deviceSlice: deviceReducer.reducer
};
