import {Component}          from '@angular/core';
@Component({
  selector: 'zcm-courses',
  template: `
  <h2>Courses</h2>
  <course-list-nodi></course-list-nodi>
  <hr/>
  <hr/>
  <course-list-di></course-list-di>
  `
})
export class CoursesComponent {
}
