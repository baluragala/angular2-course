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
var HelloComponent = (function () {
    function HelloComponent() {
        this.color = 'orange';
        this.size = 16;
        this.dataAvailable = new core_1.EventEmitter();
    }
    HelloComponent.prototype.onClick = function () {
        console.log('Clicked');
        this.color = 'red';
        this.size++;
        this.dataAvailable.emit({ message: 'Here is the data to parent' });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], HelloComponent.prototype, "pageTitle", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HelloComponent.prototype, "dataAvailable", void 0);
    HelloComponent = __decorate([
        core_1.Component({
            selector: 'my-hello',
            templateUrl: 'app/hello.component.html',
            styleUrls: ['app/hello.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], HelloComponent);
    return HelloComponent;
}());
exports.HelloComponent = HelloComponent;
//# sourceMappingURL=hello.component.js.map