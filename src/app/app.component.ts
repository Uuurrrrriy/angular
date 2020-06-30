import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson2';

  constructor(private router: Router) {
  }

  chooseUser(ref: HTMLInputElement) {
    console.log(ref.value);
    this.router.navigate(['user', ref.value]);
  }
}
