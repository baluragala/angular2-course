import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { ICourse } from './course';

@Injectable()
export class CourseService {
    private _courseApiUrl = 'api/courses/courses.json';

    constructor(private _http: Http) {}

    getCourses(): Observable<ICourse[]> {
        return this._http.get(this._courseApiUrl)
            .map((response: Response) => <ICourse[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getCourseById(id:number): Observable<ICourse[]> {
        return this._http.get(this._courseApiUrl)
            .map((response: Response) => <ICourse[]> response.json())
            .map(courses => courses.filter((course:ICourse) => course.courseId == id))
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
