// To select the element with id of bear-photo:
document.getElementById('bear-photo')

//To select the element with id of main:
document.getElementById('main')

//array like behavior
const inputs = document.getElementsByTagName("input")

for(let input of inputs){console.log(input.value)} 

//you can actually turn it into an array:

// const arr = [...inputs];

// console.log(arr);

// arr.pop();
// console.log(arr)

//selecting with classname:

// const special = document.getElementsByClassName("special");

// for(let specials of special){console.log(special)};

const ul = document.getElementsByTagName("ul")[0] //You have 2 Ul's. You forgot to put the [0] hence code was not working initially.

ul.getElementsByClassName("special");