import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SizePipe } from './size.pipe';
import { FilterPipe } from './filter.pipe';
import { RendomColorDirective } from './rendom-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    SizePipe,
    FilterPipe,
    RendomColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
