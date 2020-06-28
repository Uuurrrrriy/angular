import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // state: any;
  //
  // loginForm: {login: string, password: string } = {
  //   login: '',
  //   password: ''
  // };
  //
  // forma: FormGroup;

  // constructor() {
  //   this.forma = new FormGroup({
  //     login: new FormControl('',
  //       [Validators.required, Validators.maxLength(10), (control) => {
  //         console.log(control);
  //         if (control.value < 2) {
  //           return {customError: true};
  //         }
  //       }]),
  //     password: this.password
  //   });
  // }

  // ChangeState(xxx: HTMLInputElement) {
  //   console.log(xxx.value);
  //   this.state = xxx.value;
  // }
  // @ts-ignore

  // password: FormControl = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{6,}')]);

  // checkState(forma: FormGroup) {
  //   console.log(forma);
  // }

  forma: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.forma = formBuilder.group({
      login: ['', [Validators.required, Validators.pattern('[a-z]{6,}')]],
      password: '123421324234'
    });
  }

}
