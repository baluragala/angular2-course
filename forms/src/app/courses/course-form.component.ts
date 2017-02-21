/**
 * Created by moksha on 20/02/17.
 */
import {Component, ViewChild} from '@angular/core';

import {Course}    from './course';
import {CATEGORIES} from "./mock-data";

@Component({
  moduleId: module.id,
  selector: 'zcm-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {

  categories: Array<string>;
  submitted = false;
  //model = {};

  model = {
    title: "Mastering Angular 2",
    description: "This course teaches you from basic to advanced concepts of angular2",
    category: "IT"
  };

  @ViewChild('courseForm')
  courseForm: any;

  onSubmit() {
    console.log(this.courseForm);
    this.submitted = true;
  }

  ngOnInit() {
    this.categories = CATEGORIES;
  }

  ngAfterViewInit() {
    console.log(this.courseForm);
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

}
