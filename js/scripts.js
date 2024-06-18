window.onload = () => {
	initRectangles();

}

function getChar(idx) {
	const fullName = ['r', 'a', 'n', 'i', 'g', 'i', 'r', 'o'];
	return fullName[idx % 8];
}

function initRectangles() {
	document.getElementById('switch').innerHTML = 'switch to songs';
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
	fetch('./data/music.json')
		.then((response) => response.json())
		.then((json) => {
			const wrapper = document.createElement("div");
			wrapper.id = 'song-wrapper';
			const title = json.title;
			const titleElem = document.createElement("h1");
			titleElem.id = 'title';
			titleElem.innerHTML += title;
			titleElem.style.textAlign = 'center';



			const songs = json.songs;
			const section = document.createElement('ul');
			songs.forEach(song => {
				const item = document.createElement('li');
				item.innerHTML += `${song.id}. ${song.songName} - ${song.artist}`;
				section.appendChild(item);

			});
			section.style.paddingLeft = '30px';
			wrapper.appendChild(section);
			const main = document.getElementsByTagName('main')[0];
			main.appendChild(titleElem);
			main.appendChild(wrapper);
		})

}

function chooseRectangleColor() {
	const colors = ['green', 'blue', 'red'];
	const squareLen = document.getElementsByClassName('square').length;
	return colors[squareLen % colors.length];

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
	const switchElem = document.getElementById('switch');

	if (switchElem.textContent == 'switch to songs') {
		switchElem.innerHTML = 'switch to rectangles';
		document.getElementById('plusClick').onclick = null;
		document.getElementById('minus').onclick = null;
		populateSongsInList();
	} else {
		switchElem.innerHTML = 'switch to songs';
		document.getElementById('title').remove();
		document.getElementById('song-wrapper').remove();
		document.getElementById('plusClick').onclick = addRectangle;
		document.getElementById('minus').onclick = subtractRectangle;

		initRectangles();
	}
}

function populateSongsInList() {
	initSongs();
}
