import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate{

  constructor(private httpClient: HttpClient, private dataService: DataService ) { }

  getUserById(id) {
    return  this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  // tslint:disable-next-line:max-line-length
  async canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean > {
    console.log(activatedRouteSnapshot.params);
    const id = +activatedRouteSnapshot.params.id;

    const user = await this.getUserById(id).toPromise();
    console.log(Object.keys(user));
    console.log(user);

    if (Object.keys(user).length){
      this.dataService.state.next(user);
      return Promise.resolve(true);
    }

    return Promise.resolve(false);

  }
}
