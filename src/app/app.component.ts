import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../models/UserModel';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  msg: 'users';
  // users: UserModel[];

  constructor() {
    // this.greeting();
    // this.userService.getUsers()
    //   .subscribe(value => this.users = value);
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('onInit');
    }

  // greeting(){
  //   console.log('hello');
  // }
}

