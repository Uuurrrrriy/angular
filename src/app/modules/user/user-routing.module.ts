import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {UserResolverService} from './services/user-resolver.service';
import {AllPostsComponent} from '../post/components/all-posts/all-posts.component';
import {PostResolveService} from '../post/services/post-resolve.service';
import {UserComponent} from './components/user/user.component';


const routes: Routes = [
  // localhost: 4200/users -> AllUsersComponent
  {
    path: '',
    component: AllUsersComponent,
    resolve: {allUsers: UserResolverService},
    children: [
      {
        path: ':id',
        component: UserComponent,
        loadChildren: () => import('../post/post.module').then(value => value.PostModule )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
