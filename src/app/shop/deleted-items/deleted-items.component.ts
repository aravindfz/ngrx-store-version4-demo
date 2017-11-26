import { Component, OnInit } from '@angular/core';
import { AppStore } from '../../store/app-store.interface';
import { Store } from '@ngrx/store';
import { Device } from '../../devices/device.interface';

@Component({
  selector: 'app-deleted-items',
  templateUrl: './deleted-items.component.html'
})
export class DeletedItemsComponent implements OnInit {
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
}
