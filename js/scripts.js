window.onload = () => {
	initRectangles();

}

function getChar(idx) {
	const fullName = ['r', 'a', 'n', 'i', 'g', 'i', 'r', 'o'];
	return fullName[idx % 8];
}

function initRectangles() {
	const fullName = ['r', 'a', 'n', 'i', 'g', 'i', 'r', 'o'];
	fullName.forEach((char) => {
		insertRectangle(char);
	});
}

function insertRectangle(char) {
	const square = document.createElement("div");
	square.className = "square";
	square.innerHTML += char;
	square.style.backgroundColor = chooseRectangleColor();
	const container = document.getElementById("square-container");
	container.appendChild(square);


}

function initSongs() {
}

function chooseRectangleColor() {
	const colors = ['green', 'blue', 'red'];

	const random = (min, max) => {
		const minCeiled = Math.ceil(min);
		const maxFloored = Math.floor(max);
		return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
	}
	return colors[random(0, 2)];

}

function addRectangle() {
	const char = getChar(document.getElementsByClassName('square').length);
	insertRectangle(char);

}

function subtractRectangle() {
	const elements = document.getElementsByClassName('square');
	const container = document.getElementById('square-container');
	if (elements.length < 1) { return; }
	const last = elements[elements.length - 1];

	container.removeChild(last);

}
function switchRectanglesSongs() {
}

function populateSongsInList() {
}
