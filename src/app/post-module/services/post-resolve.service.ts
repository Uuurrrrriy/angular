import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PostModel} from '../../../models/PostModel';
import {Observable} from 'rxjs';
import {PostService} from './post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<PostModel[]>{

  constructor(private postService: PostService) { }

  // @ts-ignore
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostModel[]> | Promise<PostModel[]> | PostModel[] {
    // const id = +route.paramMap.get('id');
    const id = route.queryParamMap.get('idOfUser');
    if (id) {
      return this.postService.getPostsByUserID(id) ;
    } else {
      return this.postService.getAllPosts();
    }


  }
}
