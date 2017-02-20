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
var AppComponent = (function () {
    function AppComponent() {
        this.color = 'green';
        this.condition = false;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>Custom Attribute Directive in Angular</h1>\n    \n    <span>1.</span> <p myHighlight>I am highlighted with custom attribute directive</p>\n    <hr/>\n    <span>2.</span><p myHighlightWithEvent>Hover on me!!, I change color</p>\n    <hr/>\n    <span>3.</span><p [myHighlightWithEventAndInput]=\"color\">Hover on me I change color, on your choice of selection below</p>\n\n    <div>\n      <input type=\"radio\" name=\"colors\" (click)=\"color='lightgreen'\">Green\n      <input type=\"radio\" name=\"colors\" (click)=\"color='yellow'\">Yellow\n      <input type=\"radio\" name=\"colors\" (click)=\"color='cyan'\">Cyan\n    </div>\n    \n    <hr/>\n    <br/>\n    \n    \n    <p *myUnless=\"condition\">\n        (A) This paragraph is displayed because the condition is false.\n    </p>\n\n    <p *myUnless=\"!condition\">\n      (B) Although the condition is true,\n      this paragraph is displayed because myUnless is set to false.\n    </p>\n    \n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map