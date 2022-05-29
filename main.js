let igFollowers = 1451;

let fbFollowers = 2319;

let pinterestFollowers = 15;

let totalFollowers = igFollowers +fbFollowers+pinterestFollowers;

//Animate the numbers
window.onload = () => {
	console.log("okok")
	document.getElementById('chiffre--abonnes').setAttribute("data-val",totalFollowers);
	document.getElementById('annees--experience').setAttribute("data-val",((new Date().getFullYear())-2001).toString());

	let valueDisplays = document.querySelectorAll(".chiffres--chiffres");
	let interval = 3000;
	valueDisplays.forEach((valueDisplay) => {
	  
	  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
	  let startValue = Math.max(endValue,100)-100;
	  let duration = Math.floor(interval / (endValue-startValue));
	  let counter = setInterval(function () {
		startValue += 1;
		valueDisplay.textContent = startValue;
		if (startValue == endValue) {
		  clearInterval(counter);
		}
	  }, duration);
	});
	




}



