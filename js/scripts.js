window.onload = () => {
	initRectangles();

}

function initRectangles() {
	const fullName = ['r', 'a', 'n', 'i', 'g', 'i', 'r', 'o'];
	fullName.forEach((char) => {
		const square = document.createElement("div");
		square.className = "square";
		square.innerHTML += char;
		square.style.backgroundColor = chooseRectangleColor();
		const container = document.getElementById("square-container");
		container.appendChild(square);
	});
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
}

function subtractRectangle() {
}
function switchRectanglesSongs() {
}

function populateSongsInList() {
}
