console.log("script Running");

const front = document.getElementById("front");
const below = document.getElementById("below");

document.onmousemove = function (e) {
	// console.log("mouse location:", e.clientX, e.clientY);
	let x = e.clientX;
	let y = e.clientY;
	front.style.setProperty("--x", `${x}px`);
	front.style.setProperty("--y", `${y}px`);
};
setInterval(colorSwitch, 2000);

function colorSwitch() {
	front.classList.toggle("bg-black");
	front.classList.toggle("bg-white");
	below.classList.toggle("bg-white");
	below.classList.toggle("bg-black");
}
