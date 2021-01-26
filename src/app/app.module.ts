import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import {RouterModule, Routes} from '@angular/router';
import {UserResolveService} from './services/user-resolve.service';
import { UserComponent } from './components/users/user/user.component';
import { FullUserComponent } from './components/users/full-user/full-user.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent, resolve: {userData: UserResolveService},
  children: [
    {path: ':id', component: FullUserComponent}
  ]},
  {path: '', redirectTo: 'users', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    FullUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
