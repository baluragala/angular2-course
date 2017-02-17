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
var core_1 = require("@angular/core");
/**
 * Created by moksha on 17/02/17.
 */
var LifeToDeathComponent = (function () {
    function LifeToDeathComponent() {
        this.phase = 0;
        console.log(" constructor Phase :" + this.phase++);
    }
    LifeToDeathComponent.prototype.ngOnInit = function () {
        console.log(" ngOnInit Phase :" + this.phase++);
    };
    LifeToDeathComponent.prototype.ngOnChanges = function () {
        console.log(" ngOnChanges Phase :" + this.phase++);
    };
    LifeToDeathComponent.prototype.ngDoCheck = function () {
        console.log(" ngDoCheck Phase :" + this.phase++);
    };
    LifeToDeathComponent.prototype.ngAfterContentInit = function () {
        console.log(" ngAfterContentInit Phase :" + this.phase++);
    };
    LifeToDeathComponent.prototype.ngAfterContentChecked = function () {
        console.log(" ngAfterContentChecked Phase :" + this.phase++);
    };
    LifeToDeathComponent.prototype.ngAfterViewInit = function () {
        console.log(" ngAfterViewInit Phase :" + this.phase++);
    };
    LifeToDeathComponent.prototype.ngAfterViewChecked = function () {
        console.log(" ngAfterViewChecked Phase :" + this.phase++);
    };
    LifeToDeathComponent.prototype.ngOnDestroy = function () {
        console.log(" ngAfterViewChecked Phase :" + this.phase++);
    };
    __decorate([
        core_1.Input('data'), 
        __metadata('design:type', String)
    ], LifeToDeathComponent.prototype, "dataVar", void 0);
    LifeToDeathComponent = __decorate([
        core_1.Component({
            selector: 'zeo-l2d',
            template: '<p>This is L2D component</p>'
        }), 
        __metadata('design:paramtypes', [])
    ], LifeToDeathComponent);
    return LifeToDeathComponent;
}());
exports.LifeToDeathComponent = LifeToDeathComponent;
//# sourceMappingURL=life-to-death.component.js.map