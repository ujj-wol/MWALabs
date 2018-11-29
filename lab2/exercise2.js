const { from } = require('rxjs');
const { filter } = require('rxjs/operators');

Array.prototype.even = function() {
    let outArray = [];
    let self = this;
    setTimeout(() => {
                        for(let val of self) {
                            (val % 2 === 0)? outArray.push(val): null;
                        }
                        console.log(outArray);
    }, 0);
}

Array.prototype.odd = function() {
    //let self = this;
    setTimeout(() => {
        console.log(this.filter(val => val % 2 !== 0));  //this.filter() is also working even though this should refer to window/global here. why??
    }, 0)
}

console.log('start');
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log('end');