import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CarsComponent} from './components/cars/cars.component';
import {CreateComponent} from './components/create/create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: '', redirectTo: 'cars', pathMatch: 'full'},
      {path: 'cars', component: CarsComponent},
      {path: 'create', component: CreateComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CreateComponent,
    MainComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
