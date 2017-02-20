import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {CourseModule} from "./courses/course.module";
import {LoggerService} from "./logger.service";

@NgModule({
  imports: [BrowserModule, CourseModule],
  declarations: [AppComponent],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
