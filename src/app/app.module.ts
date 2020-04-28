import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes} from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { AllUsersComponent } from './all-users/all-users.component';
import {UserResolverService} from './services/user-resolver.service';
import { AllPostsComponent } from './all-posts/all-posts.component';
import {PostResolveService} from './services/post-resolve.service';

const  routes: Routes = [
  // localhost: 4200 -> HelloComponent
  {
    path: '',
    component: HelloComponent
  },
  // localhost: 4200/users -> AllUsersComponent
  {
    path: 'users',
    component: AllUsersComponent,
    resolve: {allUsers: UserResolverService},
    children: [
      {
        path: ':id/posts',
        component: AllPostsComponent,
        resolve: {xxx: PostResolveService}
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HelloComponent,
    AllUsersComponent,
    AllPostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
