import * as _ from 'lodash';
import { Action } from '@ngrx/store';
import * as DEVICE_ACTIONS from '../actions/device.actions';
import { Device } from '../../devices/device.interface';

export interface DeviceSlice {
    listOfDevices?: Device[];
    selectedDevice?: Device;
}

const initialState: DeviceSlice = {

};


export function reducer(state = initialState, action: DEVICE_ACTIONS.Actions): DeviceSlice {
    switch (action.type) {
        case DEVICE_ACTIONS.SET_SELECTED_DEVICE: {
            initialState.selectedDevice = action.devices;
            return initialState;
        }
        case DEVICE_ACTIONS.SET_LIST_OF_DEVICES: {
            initialState.listOfDevices = action.listOfDevices;
            return initialState;
        }
        case DEVICE_ACTIONS.REMOVE_DEVICE: {
            _.remove(initialState.listOfDevices, (device) => device === action.device);
            return initialState;
        }
        default:
            return initialState;
    }
}
