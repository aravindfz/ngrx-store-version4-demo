import { Action } from '@ngrx/store';
import { Device } from '../../devices/device.interface';

// store the selected device
export const SET_SELECTED_DEVICE = 'Set Selected Device';
export class SetSelectedDevice implements Action {
    readonly type = SET_SELECTED_DEVICE;
    constructor(public devices: Device) { }
}

// store all the devices
export const SET_LIST_OF_DEVICES = 'SET LIST OF DEVICES';
export class SetListOfDevices implements Action {
    readonly type = SET_LIST_OF_DEVICES;
    constructor(public listOfDevices: Device[]) { }
}

// store all the devices
export const REMOVE_DEVICE = 'REMOVE DEVICE';
export class RemoveDevice implements Action {
    readonly type = REMOVE_DEVICE;
    constructor(public device: Device) { }
}
export type Actions = SetSelectedDevice | SetListOfDevices | RemoveDevice;
