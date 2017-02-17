import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ICourse } from './course';
import { CourseService } from './course.service';

@Component({
    templateUrl: '/app/courses/course-detail.component.html'
})
export class CourseDetailComponent implements OnInit {
    pageTitle: string = 'Course Detail';
    course: ICourse;
    errorMessage: string;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _courseService: CourseService) {
    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
        this._courseService.getCourseById(id)
                .subscribe(course => {
                    this.course = course[0]
                    console.log(this.course)
                },
                           error => this.errorMessage = <any>error);
        
    }

    onBack(): void {
        this._router.navigate(['/courses']);
    }
}
