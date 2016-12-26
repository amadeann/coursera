var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];
var face;
var max_top_position = 400;
var max_left_position = 400;

function generateFaces() {
	for(i=0; i < numberOfFaces; i++) {
		face = document.createElement('img');
		face.setAttribute("src","smile.png");
		face.style.top = Math.floor(Math.random()*(max_top_position+1)) + "px";
		face.style.left = Math.floor(Math.random()*(max_left_position+1)) + "px";
		theLeftSide.appendChild(face);
	}

	leftSideImages = theLeftSide.cloneNode(true);
	leftSideImages.removeChild(leftSideImages.lastElementChild);
	theRightSide.appendChild(leftSideImages);

	theLeftSide.lastElementChild.addEventListener("click",nextLevel);
	function nextLevel(event) {
		event.stopPropagation();
		numberOfFaces += 5;
		theLeftSide.lastElementChild.removeEventListener("click",nextLevel);
		while (theLeftSide.firstChild) {
			theLeftSide.removeChild(theLeftSide.lastElementChild);
		}
		while (theRightSide.firstChild) {
			theRightSide.removeChild(theRightSide.lastElementChild);
		}
		generateFaces();
		theBody.removeEventListener("click",gameOver);
	}

	theBody.addEventListener("click",gameOver);
	function gameOver(event) {
		event.stopPropagation();
	    alert("Game Over!");
	    theBody.removeEventListener("click",gameOver);
	    theLeftSide.lastElementChild.removeEventListener("click",nextLevel);
	}
}

window.onload = generateFaces;