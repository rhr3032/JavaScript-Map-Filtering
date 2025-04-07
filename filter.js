// filter function

let arr=[1,2,3,4,5,6,7,8,9,10];

let filterdElements=arr.filter(function filter1 (x){
    return  x!== 5 && x!== 6 && x!== 7 && x!== 8;
})

console.log(filterdElements); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]




// Keep only the values 5, 6, 7, and 8
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filteredElements = arr.filter(function(x) {
    return x == 5 || x == 6 || x == 7 || x == 8;
});

console.log(filteredElements); // Output: [5, 6, 7, 8]




// Keep only the values 5, 6, 7, and 8
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filteredElements = arr.filter((x) => {
    return x == 5 || x == 6 || x == 7 || x == 8;
});

console.log(filteredElements); // Output: [5, 6, 7, 8]