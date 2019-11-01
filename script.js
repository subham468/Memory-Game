function randomNumber() {
	var random = document.getElementById("number").innerHTML = Math.floor(Math.random() * 1000000);
	// console.log(random);
	document.getElementById("kela").innerHTML = "Refreshing the page in 10 seconds...";

	// TODO:When you click on the button, generate a random 6 digit nummber and display it in the < div > element.
	var jsonRandom = JSON.stringify(random);
	console.log('===========From Random Number=====================');
	console.log(jsonRandom);

	//TODO: Storing the random number in localStorage of browser.
	window.localStorage.setItem("Paul", jsonRandom);
	console.log('===========From LocalStorage of Browser=====================');
	console.log(localStorage.getItem("Paul"));

	// TODO:After 5 seconds, JS should refresh the page and show a text input field to enter the number and a submit button.
	setInterval(function () {
		window.location = 'hey.html';
	}, 2000);
}

function guessNumber() {
	// alert('Enter a number');
	var num = document.getElementById("num").value;
	if (num == '') {
		alert('Enter a number');
	} else if (isNaN(num)) {
		alert('Only number is valid');
	} else if (num.length == 6) {
		var dnum, drnum, revnum, revrnum, count, rnum;
		count = 0;
		revnum = 0;
		revrnum = 0;
		rnum = localStorage.getItem("Paul");
		while (num != 0) {
			dnum = num % 10;
			drnum = rnum % 10;
			revnum = revnum * 10 + dnum;
			revrnum = revrnum * 10 + drnum;
			num = parseInt(num / 10);
			rnum = parseInt(rnum / 10);
		}
		while (revnum != 0) {
			dnum = revnum % 10;
			drnum = revrnum % 10;
			if (dnum == drnum) {
				count += 1;
			} else {
				break;
			}
			revnum = parseInt(revnum / 10);
			revrnum = parseInt(revrnum / 10);
		}
		document.getElementById("show").innerHTML = count + " matches found";
	}
}