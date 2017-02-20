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
var mock_courses_1 = require('./mock-courses');
var logger_service_1 = require("../logger.service");
/**
 * A service is nothing more than a class in Angular.
 * It remains nothing more than a class until you register it with an Angular injector.
 */
var CourseWithLoggerService = (function () {
    function CourseWithLoggerService(logger) {
        this.logger = logger;
    }
    CourseWithLoggerService.prototype.getCourses = function () {
        console.log('getCourses-with-logger');
        this.logger.log('Fetching coures');
        return mock_courses_1.COURSES;
    };
    CourseWithLoggerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [logger_service_1.LoggerService])
    ], CourseWithLoggerService);
    return CourseWithLoggerService;
}());
exports.CourseWithLoggerService = CourseWithLoggerService;
//# sourceMappingURL=course-with-logger.service.js.map