"use strict";
exports.__esModule = true;
var package_1 = require("./package");

function University(name, dept) {
    this.name = name;
    this.dept = dept;
    this.graduation = function (year) {
        console.log("Graduating " + this.dept + " " + year + " students");
    };
}
var mum = new University("MUM", "Computer Science");
mum.graduation(2019);

console.log({ lab: package_1.lab });
console.log(package_1.printDate());
