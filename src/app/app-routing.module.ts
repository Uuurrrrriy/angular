import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HelloComponent} from './hello/hello.component';
import {AllUsersComponent} from './modules/user/components/all-users/all-users.component';
import {UserResolverService} from './modules/user/services/user-resolver.service';
import {AllPostsComponent} from './modules/post/components/all-posts/all-posts.component';
import {PostResolveService} from './modules/post/services/post-resolve.service';

const  routes: Routes = [
  // localhost: 4200 -> HelloComponent
  {
    path: '',
    component: HelloComponent
  },
  {
    path: 'posts',
    loadChildren: () => import('./modules/post/post.module').then(value => value.PostModule )
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/user/user.module').then(value => value.UserModule )
  }
  // localhost: 4200/users -> AllUsersComponent
  // {
  //   path: 'users',
  //   component: AllUsersComponent,
  //   resolve: {allUsers: UserResolverService},
  //   children: [
  //     {
  //       path: ':id/posts',
  //       component: AllPostsComponent,
  //       resolve: {xxx: PostResolveService}
  //     }
  //   ]
  // }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
