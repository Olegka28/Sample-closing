'use strict';


// Задача

// Написать функцию makeAdder, которая должна работать следующим образом:
// let adder = makeAdder();
// adder() // 0
// adder (2) //2
// adder (10) // 12

// 2) Написать функцию createCounter, которая будет работать следующим образом.
// let counter = createCounter(10);


function makeAdder (num = 0) {
    let sum = 0
    function fn (sum) {
        return sum + num
    }
    return fn(sum)
}

let adder = makeAdder;
console.log("Первое задание")
console.log(adder())
console.log(adder(2))
console.log(adder(10))

let current;




function createCounter (index) {
    let counter = index;

    const current = {
        increment: function () {
            return ++counter
        },
        decrement: function () {
            return --counter
        },
        reset: function () {
            return counter = 10
        },
        getCurrent: function () {
            return counter
        },
        setValue: function (num) {
            return counter = num
        },
    };

    return current
}



let counter = createCounter(10)
console.log('Второе задание')
console.log(counter.getCurrent()) // 10;
console.log(counter.increment()) // 11
console.log(counter.getCurrent()) // 11;
console.log(counter.decrement()) // 10;
console.log(counter.decrement()) // 9;
console.log(counter.getCurrent()) // 9;
console.log(counter.setValue(150)) // 90
console.log(counter.getCurrent()) // 90;
console.log(counter.reset()) // 10; // reset to initial value that was passed to createCounter function
console.log(counter.getCurrent()) // 10;
