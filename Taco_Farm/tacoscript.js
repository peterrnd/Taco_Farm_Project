// Taco Farm Project: Ch 12

//event listener on the <div> for the click event
document.getElementById("button").addEventListener("click", addTaco);
// global variable which starts the taco count at zero
let tacoNum = 0;
// write the zero value of tacoNum into the <span> element
document.getElementById("tacoCount").textContent = tacoNum;

//definition of the addTaco() function
function addTaco() {
	// increment the tacoNum value by one
	tacoNum++;
	// analyze how many tacos we currently have
	if(tacoNum <= 10){
		//add a taco image into the document
		let newImg = document.createElement("img");
		newImg.setAttribute("src","tacos.png");
		document.getElementById("tacoFarm").appendChild(newImg);

		//update the tacoCount of the document

		document.getElementById("tacoCount").textContent = tacoNum;
	} else {
		document.getElementByTagName("h1")[0].textContent = "Woah! That's Too Many Tacos!";
		document.getElementById("button").style.display= "none";
	}
}
