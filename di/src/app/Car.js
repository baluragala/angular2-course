"use strict";
var Engine_1 = require("./Engine");
var Tires_1 = require("./Tires");
var Car = (function () {
    function Car() {
        this.description = 'No DI';
        this.engine = new Engine_1.Engine();
        this.tires = new Tires_1.Tires();
    }
    // Method using the engine and tires
    Car.prototype.drive = function () {
        return (this.description + " car with ") +
            (this.engine.cylinders + " cylinders and " + this.tires.make + " tires.");
    };
    return Car;
}());
exports.Car = Car;
var Car1 = (function () {
    function Car1(engine, tires) {
        this.engine = engine;
        this.tires = tires;
        this.description = 'DI';
    }
    // Method using the engine and tires
    Car1.prototype.drive = function () {
        return (this.description + " car with ") +
            (this.engine.cylinders + " cylinders and " + this.tires.make + " tires.");
    };
    return Car1;
}());
exports.Car1 = Car1;
//# sourceMappingURL=Car.js.map