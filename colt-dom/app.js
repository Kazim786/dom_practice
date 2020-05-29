import { link } from "fs";

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

// const ul = document.getElementsByTagName("ul")[0] //You have 2 Ul's. You forgot to put the [0] hence code was not working initially.

// ul.getElementsByClassName("special");

// QuerySelector ******

// const h1 = document.querySelector("h1");



// const liSpecial = document.querySelector("li.special") //selects first li with class of special

// //descendant syntax
// const nestedSpecial = document.querySelector('section ul li.special')

// //attribute selector syntax
// const passwordInput = document.querySelector('input[type="password"]')

//innerHTML 

//Allows you to modify the way your web page looks using html tags. I.e <bold></bold> tags.
//This is opposed to what the innerText does. innerText will make into a string anything that you put into it and displays it into the web page

//textContent 
//Displays the way the web page looks like in the HTML document.

//innerText
//innerText displays in the console how the innerText looks like in the browser. As opposed to textContent which shows how it looks like in the html file

//Get & Set 

// const range = document.querySelector("input[type='range']");

// range.getAttribute("min")

// range.getAttribute("max")

//for set you need 2 arguments. 1 will be the attribute you want to change. The other is the value you want to change it to.
// range.setAttribute("min", '-500')

//example 2

// range.setAttribute("type", "radio")

//Parent, Children, Sibling Elements:

//parent:
// var firstLi = document.querySelector('li');
// firstLi.parentElement;

//Children:
// const ul = document.querySelector('ul')
// ul.children

//Next and previous siblings:

// var firstLi = document.querySelector('li');
// firstLi.nextElementSibling

//Changing Multiple Elements

// const allLis = document.querySelectorAll('li')

// for(let i = 0; i < allLis.length; i++){
//     allLis[i].innerText = "We are the champions"
// }

// or we can use a 'for of' loop

// for (let li of allLis){
//     li.innerHTML = 'WE ARE <b> The champs</b>'
// }

//You could have used innerText again but we wanted to style with HTML tags so we used innerHTML method

//ALTERING STYLES ***************

// const allLis = document.querySelectorAll("li") //dont forget this is an array. Hence forEach loop works on it
// const colors = ['red', 'orange', 'green', 'purple', 'blue', 'yellow'];

// allLis.forEach((li, i) => { //even tho you have 2 arrays, one is the color one and the other is the li. The one you will make changes to is the one you attach to the forEach
//     const color = colors[i];
//     li.style.color = color;

// })

//ALTERING STYLES (BETTER WAY):

// const li = document.querySelector('li')

// const styles = getComputedStyle(li) //This will show all current CSS properties. Which is something the previous method did not do 

const todo = document.querySelector('#todos .todo')

// todo.style.color = 'gray'
// todo.style.textDecoration = 'line-through'
// todo.style.opacity = '50%'

todo.getAttribute('class')

// todo.setAttribute('class', 'todo done'); //if we put 'done' alone the styling from the todo class goes away. So we have to put both classes.
//This isnt really a good way to do this.

//Better way:

// todo.classList.remove('done') 

//or

// todo.classList.add('done')

//An even better way is toggle. If a class is there it will be removed. If a class isnt there it will be added

// todo.classList.toggle('done')