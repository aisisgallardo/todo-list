var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + ' '));
	li.addEventListener("click", function (event) {
		event.target.classList.toggle("done");  
	})
	ul.appendChild(li);
	delListElement(li)	
	input.value = "";
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

function taskDone(event){
	event.target.classList.toggle("done");
}

function addNewListElement() {
	
}
function delListElement(li) {
	var delButton = document.createElement("button");
	delButton.appendChild(document.createTextNode("delete"));
	delButton.classList.add("container")
	delButton.addEventListener("click",function(delbtn) {
		delButton.parentElement.remove();
	})

	li.appendChild(delButton);
}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);




document.querySelectorAll("li").forEach(function(li) { 
	li.appendChild(document.createTextNode(' '));
	delListElement(li);

	li.addEventListener("click", function(event) {
		event.target.classList.toggle("done");  
	})

})	 
