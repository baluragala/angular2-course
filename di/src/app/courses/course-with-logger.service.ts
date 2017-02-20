import {Injectable} from '@angular/core';
import {COURSES}     from './mock-courses';
import {LoggerService} from "../logger.service";

/**
 * A service is nothing more than a class in Angular.
 * It remains nothing more than a class until you register it with an Angular injector.
 */

@Injectable()
export class CourseWithLoggerService {

  constructor(private logger: LoggerService) {

  }

  getCourses() {
    console.log('getCourses-with-logger');
    this.logger.log('Fetching coures');
    return COURSES;
  }
}
