

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

const body = document.querySelector('body')

var deleter = document.createElement("button");
deleter.name = "deleter"
deleter.style.color = "black"

function inputLength() {
	return input.value.length;
}
li[1].appendChild(deleter)
li[2].appendChild(deleter)
li[3].appendChild(deleter)
li[4].appendChild(deleter)
li[5].appendChild(deleter)


function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.appendChild(deleter);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// function lineThrough(){
// 	li.classList.toggle('done')
// }

// function lineThrough(){
// 	body.forEach(function(body){
// 	body.classList.toggle('done')
// })}


//so no li that is already marked off can be marked off again
//keep getting error that li.addEventListener is not a function
// li.addEventListener("click", function(){
// 	if (li.classList.toggle('done') = true){
// 		return //to break out of conditional
// 	} else{
// 		body.classList.toggle('done')
// 	}
// });

//if click returns true then line through

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

deleter.addEventListener("click", function(){
	
	li[1].innerText = ""
	li[2].innerText = ""
	li[3].innerText = ""
	li[4].innerText = ""
	li[5].innerText = ""
	// li[6].innerText = ""
})

// function toggle(){
// 	li.children.classList.toggle("done")
// }

// li.addEventListener("click", toggle);

//classList.toggle

// 1. If you click on the list item, it toggles the .done  class on and off.

// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.