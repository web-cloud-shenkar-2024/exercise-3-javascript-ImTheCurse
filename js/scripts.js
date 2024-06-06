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
	fetch('../data/music.json')
		.then((response) => response.json())
		.then((json) => {
			const title = json.title;
			const titleElem = document.createElement("h1");
			titleElem.innerHTML += title;
			titleElem.style.textAlign = 'center';

			const header = document.getElementsByTagName('header');
			const topbar = document.getElementById('topbar');
			header[0].insertBefore(titleElem, topbar);
			const node = document.getElementById('square-container');


			const songs = json.songs;
			const section = document.createElement('ul');
			songs.forEach(song => {
				const item = document.createElement('li');
				item.innerHTML += `${song.id}. ${song.songName} - ${song.artist}`;
				section.appendChild(item);

			});
			section.style.paddingLeft = '30px';
			document.body.appendChild(section);
		})

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
	document.getElementById('square-container').innerHTML = "";
	const topbar = document.getElementById('topbar');
	topbar.style.backgroundColor = 'white';
	topbar.innerHTML = "";
	topbar.remove();
	populateSongsInList();
}

function populateSongsInList() {
	initSongs();
}
