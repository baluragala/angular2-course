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
var forms_1 = require('@angular/forms');
var mock_data_1 = require("./mock-data");
var CourseDetailComponent = (function () {
    function CourseDetailComponent(fb) {
        this.fb = fb;
        this.buildForm();
        this.categories = mock_data_1.CATEGORIES;
    }
    CourseDetailComponent.prototype.buildForm = function () {
        this.courseForm = this.fb.group({
            title: ['', forms_1.Validators.required],
            category: ['', forms_1.Validators.required]
        });
        var c = {
            title: 'Test',
            categor: 'IT'
        };
        this.courseForm.setValue(c);
    };
    CourseDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'course-detail',
            templateUrl: './course-detail.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], CourseDetailComponent);
    return CourseDetailComponent;
}());
exports.CourseDetailComponent = CourseDetailComponent;
//# sourceMappingURL=course-detail.component.js.map