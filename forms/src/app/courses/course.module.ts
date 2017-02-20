import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CourseFormComponent} from "./course-form.component";
import {FormsModule}   from '@angular/forms';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [CourseFormComponent],
  exports: [CourseFormComponent],
})
export class CourseModule {

}


