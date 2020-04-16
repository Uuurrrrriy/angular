import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../models/UserModel';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  template: `<h1> Hello {{msg}} </h1>
    <app-user *ngFor="let user of users" [user]="user"></app-user>
  `,
  styles: [`h1 {background: silver}`]
})
export class AppComponent {
  msg: 'users';
  users: UserModel[];

  constructor(private userService: UserService) {
    // this.greeting();
    this.userService.getUsers()
      .subscribe(value => this.users = value);
  }

  // greeting(){
  //   console.log('hello');
  // }
}

