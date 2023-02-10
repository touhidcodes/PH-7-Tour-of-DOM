console.log("hello js");
console.log(document);
console.log(document.body);

const liCollection = document.getElementsByTagName("li");
// console.log(liCollection);

for (const li of liCollection) {
	console.log(li.innerText);
}

const heading = document.getElementsByTagName("h1");
// console.log(heading);

for (const text of heading) {
	console.log(text.innerText);
}

const fruits = document.getElementById("fruits-li");

// console.log(fruits.innerText);

for (const fruit of fruits) {
	console.log(fruit.innerText);
}
const visited = document.getElementsByClassName("visited");

// console.log(visited.innerText);

for (const visit of visited) {
	console.log(visit.innerText);
}
