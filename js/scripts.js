window.onload = () => {
	const fullName = ['r', 'a', 'n', 'i', 'g', 'i', 'r', 'o'];
	fullName.forEach((char) => {
		const square = document.createElement("div");
		square.className = "square";
		console.log(char);
		square.innerHTML += char;
		const container = document.getElementById("square-container");
		container.appendChild(square);
	}
	);
}

function initRectangles() {
}

function initSongs() {
}

function chooseRectangleColor() {
}

function addRectangle() {
}

function subtractRectangle() {
}
function switchRectanglesSongs() {
}

function populateSongsInList() {
}
