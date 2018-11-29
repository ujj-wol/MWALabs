//Part I (Using ES6 Features)
String.prototype.filterWords = function (arr) {
    let myString = this;

    for (let val of arr) {
        myString = myString.replace(val, "***"); //.repeat(val.length));
    }
    return myString;
};
// console.log('This house is nice!'.filterWords(['house', 'nice', 'cat']));



//Part II (Using Promises)
function myPromiseFunc(myString, arr) {
    return new Promise(function (resolve, reject) {
        for (let val of arr) {
            myString = myString.replace(val, "***");
        }
        resolve(myString);
    });
}

String.prototype.filterWords2 = function (arr) {
    myPromiseFunc(this, arr)
        .then(value => {
            console.log(value)
        })
        .catch(value => console.error(value));
};
// 'This house is nice!'.filterWords2(['house', 'nice', 'cat']);



// Part III(Using Async / Await)

function myPromiseFunc(myString, arr) {
    console.log('Called 2!');
    return new Promise(function (resolve, reject) {
        for (let val of arr) {
            myString = myString.replace(val, "***");
        }
        resolve(myString);
    });
}

String.prototype.filterWords3 = async function (arr) {
    try {
        console.log('Called 1!');
        let results = await myPromiseFunc(this, arr);
        console.log(results);
        // return results;

    } catch (e) {
        console.log("catch called: Error occurred!");
    }
};
// console.log('This house is nice!'.filterWords3(['house', 'nice', 'cat']));
// console.log('Called 4!');



//Part IV (Using Observables)
String.prototype.filterWords4 = function (arr) {
    const { Observable, from } = require('rxjs');

    const { map, reduce } = require('rxjs/operators');

    let str = this.split(" ");
    from(str).
    pipe(
        map((word) => {
            if(arr.indexOf(word) > -1) {
                return '***';
            } else
                return word;
        }),
        reduce((sentence, word) => `${sentence} ${word}`)
    ).
    subscribe(obj => console.log(obj), null, null);
}

'This house is nice!'.filterWords4(['house', 'nice', 'cat']);