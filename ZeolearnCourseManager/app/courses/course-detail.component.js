"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var course_service_1 = require('./course.service');
var CourseDetailComponent = (function () {
    function CourseDetailComponent(_route, _router, _courseService) {
        this._route = _route;
        this._router = _router;
        this._courseService = _courseService;
        this.pageTitle = 'Course Detail';
    }
    CourseDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._route.snapshot.params['id'];
        this.pageTitle += ": " + id;
        this._courseService.getCourseById(id)
            .subscribe(function (course) {
            _this.course = course[0];
            console.log(_this.course);
        }, function (error) { return _this.errorMessage = error; });
    };
    CourseDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/courses']);
    };
    CourseDetailComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/courses/course-detail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, course_service_1.CourseService])
    ], CourseDetailComponent);
    return CourseDetailComponent;
}());
exports.CourseDetailComponent = CourseDetailComponent;
//# sourceMappingURL=course-detail.component.js.map