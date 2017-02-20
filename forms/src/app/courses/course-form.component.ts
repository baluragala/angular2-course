/**
 * Created by moksha on 20/02/17.
 */
import {Component} from '@angular/core';

import {Course}    from './course';

@Component({
  moduleId: module.id,
  selector: 'zcm-course-form',
  templateUrl: './course-form.component.html'
})
export class CourseFormComponent {

  categories = ['IT', 'Finance', 'Marketing'];
  submitted = false;
  model = {};

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

}
