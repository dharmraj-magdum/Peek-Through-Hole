console.log("script Running");

var size = 100;
const front = document.getElementById("front");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

document.onmousemove = function (e) {
	// console.log("mouse location:", e.clientX, e.clientY);
	let x = e.clientX - 90;
	let y = e.clientY - 100;
	front.style.setProperty("--x", `${x}px`);
	front.style.setProperty("--y", `${y}px`);
	front.style.setProperty("--size", `${size}px`);
};

function increseHole() {
	if (size < 300) {
		size += 50;
	}
	// console.log(size);
	if (size == 300) {
		plus.disabled = true;
		// console.log(plus.disabled);
	}
	minus.disabled = false;
}
function decreseHole() {
	if (size >= 100) {
		size -= 50;
	}
	// console.log(size);
	if (size == 50) {
		minus.disabled = true;
		// console.log(plus.disabled);
	}
	plus.disabled = false;
}
