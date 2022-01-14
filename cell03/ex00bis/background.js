function randomize() {
	$("#background").css("background-color", randomColors());
}

function randomColors() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
