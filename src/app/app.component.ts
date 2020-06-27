import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson5';

  users = [
    {
      name: 'Ura',
      age: 19
    },
    {
      name: 'Ulia',
      age: 16
    },
    {
      name: 'Nikita',
      age: 19
    },
    {
      name: 'Vasya',
      age: 23
    },
    {
      name: 'Ura',
      age: 19
    }
  ];

}
