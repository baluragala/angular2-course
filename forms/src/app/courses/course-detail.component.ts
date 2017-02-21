import {Component}              from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators}            from '@angular/forms';
import {CATEGORIES} from "./mock-data";


@Component({
  moduleId: module.id,
  selector: 'course-detail',
  templateUrl: './course-detail.component.html'
})
export class CourseDetailComponent {
  courseForm: FormGroup;
  categories: Array<string>;

  constructor(private fb: FormBuilder) {
    this.buildForm();
    this.categories = CATEGORIES;
  }

  buildForm() {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      category: ['', Validators.required]
    })

    let c={
      title:'Test',
      categor:'IT'
    }

    this.courseForm.setValue(c)
  }

}
