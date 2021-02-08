import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {UsersComponent} from './components/users/users.component';
import {RouterModule} from '@angular/router';
import {UserResolveService} from './services/resolve/user-resolve.service';
import {UserComponent} from './components/users/user/user.component';
import {FullUserComponent} from './components/users/full-user/full-user.component';
import { PostsComponent } from './components/users/full-user/posts/posts.component';
import {PostResolveService} from './services/resolve/post-resolve.service';
import { PostComponent } from './components/users/full-user/posts/post/post.component';

const routes = [
  {
    path: 'users', component: UsersComponent, resolve: {usersData: UserResolveService},
    children: [
      {path: ':id', component: FullUserComponent,
        children: [
          {path: 'posts', component: PostsComponent, resolve: {usersData: PostResolveService}}
        ]}
    ]
  },
  {path: '', redirectTo: 'users', pathMatch: 'full'}

];

@NgModule({
  declarations: [AppComponent, UsersComponent, UserComponent, FullUserComponent, PostsComponent, PostComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
