import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducer.factory';
import { RouterModule } from '@angular/router';
import { Route } from '@angular/router';
import { ShoppingItemsComponent } from './shop/shopping-items/shopping-items.component';
import { DeletedItemsComponent } from './shop/deleted-items/deleted-items.component';

export const routes: Route[] = [
  { path: '', redirectTo: 'shopping-items', pathMatch: 'full' },
  { path: 'shopping-items', component: ShoppingItemsComponent }
];
@NgModule({
  declarations: [
    AppComponent, ShoppingItemsComponent, DeletedItemsComponent
  ],
  imports: [
    BrowserModule, StoreModule.forRoot(reducers),
    RouterModule.forRoot(routes),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
