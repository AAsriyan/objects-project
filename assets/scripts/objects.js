const movieList = document.getElementById("movie-list");

movieList.style.backgroundColor = "red";
movieList.style.display = "block";

let person = {
	name: "Max",
	age: 30,
	hobbies: ["Sports", "Cooking"],
	greet: function() {
		alert("Hi there!");
	},
	1.5: "hello"
};

delete person.age;
person.isAdmin = true;
console.log(person);
console.log(person[1.5])