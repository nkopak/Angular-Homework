import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {UsersComponent} from './components/users/users.component';
import {RouterModule, Routes} from '@angular/router';
import {UserResolveService} from './services/users/user-resolve.service';
import {UserComponent} from './components/users/user/user.component';
import {FullUserComponent} from './components/users/user/full-user/full-user.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/posts/post/post.component';
import {PostResolveService} from './services/posts/post-resolve.service';
import {FullPostComponent} from './components/posts/post/full-post/full-post.component';

const routes: Routes = [
  {
    path: 'users', component: UsersComponent, resolve: {userData: UserResolveService},
    children: [
      {path: ':id', component: FullUserComponent}
    ]
  },
  {
    path: 'posts', component: PostsComponent, resolve: {userData: PostResolveService},
    children: [
      {path: 'id', component: FullPostComponent}
    ]
  },
  // {path: '', redirectTo: 'posts', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    FullUserComponent,
    PostsComponent,
    PostComponent,
    FullPostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
