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
/**
 * Created by moksha on 17/02/17.
 */
var core_1 = require('@angular/core');
var PowerOfPipe = (function () {
    function PowerOfPipe() {
    }
    PowerOfPipe.prototype.transform = function (value, toPower) {
        var exp = parseFloat(toPower);
        return Math.pow(value, isNaN(exp) ? 1 : exp);
    };
    PowerOfPipe = __decorate([
        core_1.Pipe({ name: 'powerof' }), 
        __metadata('design:paramtypes', [])
    ], PowerOfPipe);
    return PowerOfPipe;
}());
exports.PowerOfPipe = PowerOfPipe;
//# sourceMappingURL=powerof.pipe.js.map