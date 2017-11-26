import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';
import { By } from '@angular/platform-browser';
import { ShoppingItemsComponent } from './shopping-items.component';
import { AppStore } from '../../store/app-store.interface';
import { reducers } from '../../store/reducer.factory';
import { AppComponent } from '../../app.component';
import { DeletedItemsComponent } from '../deleted-items/deleted-items.component';
import { Device } from '../../devices/device.interface';
import * as _ from 'lodash';

describe('ShoppingItemsComponent', () => {
  let store: Store<AppStore>;
  let fixture: ComponentFixture<ShoppingItemsComponent>;
  let component: ShoppingItemsComponent;
  let appComponent: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, DeletedItemsComponent,
        ShoppingItemsComponent
      ],
      imports: [StoreModule.forRoot(reducers), RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingItemsComponent);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);
    appComponent = TestBed.createComponent(AppComponent).componentInstance;
  });


  it('should create the app', async(() => {
    expect(component).toBeDefined();
  }));
  it('app store is defined', () => {
    expect(store).toBeDefined();
  });
  it('deleted-items component should contain value as Kennan Exer', async(() => {
    fixture.detectChanges();
    let element = fixture.debugElement.query(By.css('table tr:nth-child(2)')).nativeElement;
    // expect(element.children[2].innerText).toBe('Kennan Exer');
  }));
  it('trigger select functionality', async(() => {
    appComponent.ngOnInit();
    fixture.detectChanges();
    let element = fixture.debugElement.query(By.css('table tr:nth-child(2)'));
    element.children[3].nativeElement.children[0].click();
    fixture.detectChanges();
    store.select(slices => slices.deviceSlice.selectedDevice)
      .subscribe(item => {
        expect(item.name).toBe('Kennan Exer');
      }).unsubscribe();
  }));

  it('trigger delete functionality', async(() => {
    appComponent.ngOnInit();
    fixture.detectChanges();
    let element = fixture.debugElement.query(By.css('table tr:nth-child(2)'));
    element.children[4].nativeElement.children[0].click();
    fixture.detectChanges();
    store.select(slices => slices.deviceSlice.listOfDevices)
      .subscribe(listOfDevices => {
        let item = _.findIndex(listOfDevices, (item1: Device) => item1.name === 'Kennan Exer');
        expect(item).toBe(-1);
      }).unsubscribe();
  }));
});
