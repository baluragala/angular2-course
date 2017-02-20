import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {CourseModule} from "./courses/course.module";

@NgModule({
  imports: [BrowserModule, CourseModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
