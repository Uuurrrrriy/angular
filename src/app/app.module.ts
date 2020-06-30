import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { UserComponent } from './components/user/user.component';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {
    path: 'user/:id',
    component: UserComponent,
    canActivate: [UserService]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
