import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {UserResolverService} from './services/user-resolver.service';
import {AllPostsComponent} from '../post-module/components/all-posts/all-posts.component';
import {PostResolveService} from '../post-module/services/post-resolve.service';


// const routes: Routes = [
//   // localhost: 4200/users -> AllUsersComponent
//   {
//     path: 'users',
//     component: AllUsersComponent, // app.component.html -> router outlet
//     resolve: {allUsers: UserResolverService},
//     loadChildren: () => import('../post-module/post-module.module').then(m => m.PostModuleModule)
//     // children: [
//     //   {
//     //     // user/100/posts
//     //     path: ':id/posts',
//     //     component: AllPostsComponent,
//     //     resolve: {xxx: PostResolveService}
//     //   }
//     // ]
//   }
// ];


const routes: Routes = [
  // localhost: 4200/users -> AllUsersComponent
  {
    path: '',
    component: AllUsersComponent, // app.component.html -> router outlet
    resolve: {allUsers: UserResolverService},
    children: [
      {
        path: '',
        loadChildren: () => import('../post-module/post-module.module').then(m => m.PostModuleModule)
      }
    ]

    // loadChildren: () => import('../post-module/post-module.module').then(m => m.PostModuleModule)

    // children: [
    //   {
    //     // user/100/posts
    //     path: ':id/posts',
    //     component: AllPostsComponent,
    //     resolve: {xxx: PostResolveService}
    //   }
    // ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
