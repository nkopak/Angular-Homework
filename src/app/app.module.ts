import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CarComponent} from './components/cars/car/car.component';
import {HomeComponent} from './components/home/home.component';
import {RouterModule} from '@angular/router';
import { CarsComponent } from './components/cars/cars.component';
import { FullCarComponent } from './components/cars/full-car/full-car.component';

@NgModule({
  declarations: [AppComponent, CarComponent, HomeComponent, CarsComponent, FullCarComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'link/home', component: HomeComponent
    },
      {
        path: 'link/cars', component: CarsComponent, children: [{
          path: ':id', component: FullCarComponent
        }]
      }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
