import {lab, printDate} from './package';

function University (name: String, dept: String): void {
    this.name = name;
    this.dept = dept;
    this.graduation = function(year: Number): void {
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}

var mum = new University("MUM", "Computer Science");
mum.graduation(2019);

console.log({lab});
console.log(printDate());