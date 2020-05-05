import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CommentModel} from '../CommentModel';
import {Observable} from 'rxjs';
import {CommentService} from '../../services/comment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsResolverService implements Resolve<CommentModel[]>{

  constructor(private commentService: CommentService) { }

  // @ts-ignore
  // tslint:disable-next-line:max-line-length
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentModel> | Promise<CommentModel> | CommentModel  {
    const postId = route.queryParamMap.get('postId');
    console.log(postId);
    // @ts-ignore
    return this.commentService.getAllCommentsOfPosts(postId);
  }
}
