console.log("hello js");
console.log(document);
console.log(document.body);

// Tag Name
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

// DOM Traversing
// Id
const fruits = document.getElementById("fruits-li");

// console.log(fruits.innerText);

for (const fruit of fruits) {
	console.log(fruit.innerText);
}

// Class Name
const visited = document.getElementsByClassName("visited");

// console.log(visited.innerText);

for (const visit of visited) {
	console.log(visit.innerText);
}

// Query Selector [only first node of the elements]
const query = document.querySelector(".visited");
for (const visit1th of query) {
	console.log(visit1th);
}

// Query Selector All [Node List]
const querys = document.querySelector(".visited");
for (const visitAll of querys) {
	console.log(visitAll);
}
