import {Injectable} from '@angular/core';
import {COURSES}     from './mock-courses';

/**
 * A service is nothing more than a class in Angular.
 * It remains nothing more than a class until you register it with an Angular injector.
 */

@Injectable()
export class CourseService {
  getCourses() {
    console.log('courseservice-no-logger');
    return COURSES;
  }
}
