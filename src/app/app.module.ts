import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user-module/components/user/user.component';
import { RouterModule, Routes} from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { AllUsersComponent } from './user-module/components/all-users/all-users.component';
import {UserResolverService} from './user-module/services/user-resolver.service';
import { AllPostsComponent } from './post-module/components/all-posts/all-posts.component';
import {PostResolveService} from './post-module/services/post-resolve.service';
import {AppRoutingModule} from './app-routing.module';
import { PostComponent } from './post-module/components/post/post.component';
import {UserModuleModule} from './user-module/user-module.module';
import {PostModuleModule} from './post-module/post-module.module';



@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
