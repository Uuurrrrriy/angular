import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CommentModel} from '../CommentModel';
import {Observable} from 'rxjs';
import {CommentService} from '../../services/comment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentResolverService implements Resolve<CommentModel[]> {

  constructor(private commentService: CommentService) { }

  // tslint:disable-next-line:max-line-length
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentModel[]> | Promise<CommentModel[]> | CommentModel[] {
    return this.commentService.getAllData();
  }
}
