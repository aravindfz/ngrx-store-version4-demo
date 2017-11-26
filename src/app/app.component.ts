import { Component, OnInit } from '@angular/core';
import { AppStore } from './store/app-store.interface';
import { Store } from '@ngrx/store';
import * as DEVICE_ACTIONS from './store/actions/device.actions';
import { Device } from './devices/device.interface';
import { deviceData } from './devices/devices.data';
import { skipWhile } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  selectedDevice: Device;
  constructor(private store: Store<AppStore>) { }

  ngOnInit() {
    this.store.dispatch(new DEVICE_ACTIONS.SetListOfDevices(deviceData));
    this.store.select(slices => slices.deviceSlice.selectedDevice)
      .subscribe(selectedDevice => {
        this.selectedDevice = selectedDevice;
      });
  }
}
