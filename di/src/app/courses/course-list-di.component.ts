import {Component}   from '@angular/core';
import {CourseService} from './course.service';
import {Course} from "./course";
@Component({
  selector: 'course-list-di',
  /*providers:[CourseService],*/
  templateUrl: 'app/courses/course-list.component.html'
})
export class CourseListDiComponent {
  courses: Course[];

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }
}


