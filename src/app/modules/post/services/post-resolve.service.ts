import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {Observable} from 'rxjs';
import {PostService} from './post.service';
import {PostModel} from '../../../../models/PostModel';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<PostModel[]>{

  constructor(private postService: PostService) { }

  // @ts-ignore
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostModel> | Promise<PostModel> | PostModel {
    // const id = +route.paramMap.get('id');
    const id = route.queryParamMap.get('idOfUser');
    this.postService.getPostsByUserID(+id);
    return ;
  }
}
