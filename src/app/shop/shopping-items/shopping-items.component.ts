import { Component, OnInit } from '@angular/core';
import { AppStore } from '../../store/app-store.interface';
import { Store } from '@ngrx/store';
import { Device } from '../../devices/device.interface';
import * as DEVICE_ACTIONS from '../../store/actions/device.actions';

@Component({
  selector: 'app-shopping-items',
  templateUrl: './shopping-items.component.html'
})
export class ShoppingItemsComponent implements OnInit {
  devices: Device[];

  constructor(private store: Store<AppStore>) { }

  ngOnInit() {
    this.store
      .select(slices => slices.deviceSlice.listOfDevices)
      .subscribe(devices => {
        this.devices = devices;
        console.log(devices);
      });
  }
  selectADevice(device: Device) {
    this.store.dispatch(new DEVICE_ACTIONS.SetSelectedDevice(device));
  }
  deleteDevice(device: Device) {
    this.store.dispatch(new DEVICE_ACTIONS.RemoveDevice(device));
  }
}
