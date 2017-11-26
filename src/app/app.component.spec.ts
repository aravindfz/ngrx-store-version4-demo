import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StoreModule, Store } from '@ngrx/store';
import { reducers } from './store/reducer.factory';
import { RouterTestingModule } from '@angular/router/testing';
import { AppStore } from './store/app-store.interface';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';
import { DeletedItemsComponent } from './shop/deleted-items/deleted-items.component';
import { By } from '@angular/platform-browser';
import * as DEVICE_ACTIONS from './store/actions/device.actions';
import { deviceData } from './devices/devices.data';

describe('AppComponent', () => {
  let store: Store<AppStore>;
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, DeletedItemsComponent
      ],
      imports: [StoreModule.forRoot(reducers), RouterTestingModule]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);
  });

  it('should create the app', async(() => {
    expect(component).toBeDefined();
  }));
  it('app store is defined', () => {
    expect(store).toBeDefined();
  });
  it('deleted-items component should contain value as Kennan Exer', () => {
    fixture.detectChanges();
    let element = fixture.debugElement.query(By.css('table tr:nth-child(2)')).nativeElement;
    expect(element.children[2].innerText).toBe('Kennan Exer');
  });
  
});
