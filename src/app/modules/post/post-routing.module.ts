import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllPostsComponent} from './components/all-posts/all-posts.component';
import {PostResolveService} from './services/post-resolve.service';


const routes: Routes = [
  // F App -> /posts
  // F User -> /users
  {
    path: '',
    component: AllPostsComponent,
    children: [
      {
        path: 'posts',
        component: AllPostsComponent,
        resolve: {xxx: PostResolveService}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
