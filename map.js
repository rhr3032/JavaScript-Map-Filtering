// map function

let arr=[1,2,3,4,5,6,7,8,9,10];
function multiply(x) { 
    return x * 9;
}
// let transform = arr.map(multiply);
let transform = arr.map(multiply)
console.log(transform);
// console.log(arr.map(multiply));

// console.log(arr.map(multiply));
console.log (arr)




// pro code

let arr=[1,2,3,4,5,6,7,8,9,10];
// let transform = arr.map(multiply);
let transform = arr.map(function multiply(x) { 
    return x * 9;
})
console.log(transform);
// console.log(arr.map(multiply));

// console.log(arr.map(multiply));
console.log (arr)



// pro code

let arr=[1,2,3,4,5,6,7,8,9,10];
// let transform = arr.map(multiply);
let transform = arr.map((x) => {return x * 9;})
console.log(transform);
// console.log(arr.map(multiply));

// console.log(arr.map(multiply));
console.log (arr)



// pro code


let arr=[1,2,3,4,5,6,7,8,9,10];
// let transform = arr.map(multiply);
let transform = arr.map((x) => (x * 9))
console.log(transform);
// console.log(arr.map(multiply));

// console.log(arr.map(multiply));
console.log (arr)