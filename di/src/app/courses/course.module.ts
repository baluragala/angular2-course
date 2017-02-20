import {NgModule} from "@angular/core";
import {CoursesComponent} from "./courses.component";
import {CourseListNodiComponent} from "./course-list-nodi.component";
import {CourseService} from "./course.service";
import {BrowserModule} from "@angular/platform-browser";
import {CourseListDiComponent} from "./course-list-di.component";
import {CourseWithLoggerService} from "./course-with-logger.service";
import {LoggerService} from "../logger.service";

@NgModule({
  imports: [BrowserModule],
  declarations: [CoursesComponent, CourseListNodiComponent, CourseListDiComponent],
  /*providers: [{provide: CourseService, useClass: CourseWithLoggerService}],*/
  providers: [
    {provide: 'LOG_ENABLED', useValue: true},
    {
      provide: CourseService,
      useFactory: function (LOG_ENABLED: boolean, logger: LoggerService) {
        let service = LOG_ENABLED == true ? new CourseWithLoggerService(logger) : new CourseService();
        return service;
      },
      deps: ['LOG_ENABLED', LoggerService]
    }
  ],
  exports: [CoursesComponent],
})
export class CourseModule {

}


