import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CourseFormComponent} from "./course-form.component";
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import {CourseDetailComponent} from "./course-detail.component";


@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [CourseFormComponent, CourseDetailComponent],
  exports: [CourseFormComponent, CourseDetailComponent],
})
export class CourseModule {

}


