import {Component, OnInit}   from '@angular/core';
import {COURSES}      from './mock-courses';
import {Course} from "./course";
@Component({
  selector: 'course-list-nodi',
  templateUrl: 'app/courses/course-list.component.html'
})
export class CourseListNodiComponent implements OnInit {
  courses: Course[];

  // see what happens when you comment the ngOnInit method
  ngOnInit() {
    this.courses = COURSES;
  }
}
