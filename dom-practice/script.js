const div = document.getElementById('#container')

//const div = document.createElement('div');                     
// create a new div referenced in the variable 'div'

const p = document.createElement('p')

p.innerText = "Hey I'm Red";
p.style.color = 'red'

const h3 = document.createElement('h3');

h3.style.color = 'blue';

h3.innerText = "I'm a blue h3"

// const divBG = document.createElement('div');
const divBG = document.querySelector('.second')

divBG.style.borderColor = "black";
divBG.style.backgroundColor = "pink";

const anotherH1 = document.createElement('h1');
anotherH1.innerHTML = "I'm in a div";

const anotherP = document.createElement('p');
anotherP.innerHTML = "ME TOO"

function foo(){
// div.append(divBG) //for some reason this didnt work so I had to physicaly add the div in the html file
divBG.append(anotherH1);
divBG.append(anotherP);
}
// div.append('divBG')