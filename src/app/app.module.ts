import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './cars/car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarsComponent,
    CarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
