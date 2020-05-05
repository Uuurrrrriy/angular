import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';
import {API} from '../constants';
import {CommentModel} from '../models/CommentModel';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getAllData(): Observable<CommentModel[]> {
    return this.httpClient.get<CommentModel[]>(API + 'comments');
  }

  getAllCommentsOfPosts(id) {
    return this.httpClient.get<CommentModel[]>(API + `comments?postId=${id}`);
  }
}
