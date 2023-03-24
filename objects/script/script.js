// ========================================
// Simpel object (literal) maken
// ========================================

// const animal = {
//     kind: "dog",
//     height: 80,
//     logInfo: function (){
//         return (this.kind + " " + this.height);
//     }
// }
// console.log(animal.logInfo());

// ========================================
// Object (literal) maken
// ========================================

// const container = document.getElementById("container");
// const content = document.createElement("p");

// const person = {
//     name: {
//         first: "Rob",
//         last: "Verplanke"
//     },
//     age: 40,
//     place: "Groningen",
//     zipCode: "9716 CE",
//     "likes football": true,
//     admin: true,
//     bio: function (){
//        return (
//                `Voornaam: ${person.name.first}<br> 
//                 Achternaam: ${person.name.last}<br>
//                 Leeftijd: ${person.age}<br> 
//                 Woonlplaats: ${person.place}<br> 
//                 Postcode ${person.zipCode}<br> 
//                 Voetbal?: ${person["likes football"]}<br> 
//                 Admin? ${person.admin}`
//               );
//     }
// }


// content.innerHTML = person["likes football"];
// container.appendChild(content);

// ========================================
// Constructor maken
// ========================================


// function Player (name, marker){
//     this.name = name;
//     this.marker = marker;
//     this.logMarker = function(){
//         console.log(marker);
//     }
// };

// const player1 = new Player ("Rob", "X");
// const player2 = new Player ("bla", "O");

// player2.logMarker();

// ========================================
// Object literal maken in praktijk
// ========================================


// function Book (title, author, pages, read){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = function (){
//         let readStatus;
//         if (read === "y"){
//             readStatus = "read the book.";
//         } else if (read === "n"){
//             readStatus = "not read yet.";
//         } else readStatus = "not sure if read";
//         return (`${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`);
//     }
// }

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "n");

// console.log(theHobbit.info());

// ========================================
// Constructors, methods en prototypes
// ========================================


// function Person(nickname, age, country){
//     this.nickname = nickname;
//     this.age = age;
//     this.country = country;
// }

// function Adult(nickname, age, country, profession){
//     Person.call(this, nickname, age, country);
//     this.profession = profession;
// }

// function Child(nickname, age, country, school){
//     Person.call(this, nickname, age, country);
//     this.school = school;
// }

// Object.setPrototypeOf(Adult.prototype, Person.prototype);
// Object.setPrototypeOf(Child.prototype, Person.prototype);

// Person.prototype.greet = function (){
//     console.log(`${this.nickname} says hello!`);
// }

// Adult.prototype.logProf = function (){
//     console.log(`${this.nickname} heeft ${this.profession} als beroep`);
// }

// Child.prototype.logSchool = function (){
//     console.log(`${this.nickname} gaat naar de ${this.school} school`);
// }

// let person1 = new Person("Robus", 40, "The Netherlands");
// let person2 = new Adult("Hans", 50, "Germany", "web-developping");
// let person3 = new Child("Grietje", 8, "Belgie", "Kriekenhof");

// ========================================
// Constructors, methods en prototypes in praktijk
// ========================================


// function Entertainment(title, genre, rating){
//     this.title = title;
//     this.genre = genre;
//     this.rating = rating;
// }

// function Game(platform, title, genre, rating){
//     Entertainment.call(this, title, genre, rating);
//     this.platform = platform;
//     this.type = this.constructor.name;
// }

// function Movie(lang, title, genre, rating){
//     Entertainment.call(this, title, genre, rating);
//     this.lang = lang;
//     this.type = this.constructor.name;
// }

// function Music(tech, title, genre, rating){
//     Entertainment.call(this, title, genre, rating);
//     this.tech = tech;
//     this.type = this.constructor.name;
// }

// Object.setPrototypeOf(Game.prototype, Entertainment.prototype);
// Object.setPrototypeOf(Movie.prototype, Entertainment.prototype);
// Object.setPrototypeOf(Music.prototype, Entertainment.prototype);

// Entertainment.prototype.printInfo = function(){
//     return (`Type: ${this.type}. Title: ${this.title}. Genre: ${this.genre}. Stars: ${this.rating}`);
// }

// Game.prototype.playGame = function(){
//     return `Playing ${this.title} on ${this.platform}`;
// }
// Movie.prototype.playMovie = function(){
//     return `Watching ${this.title} in ${this.lang} language`;
// }
// Music.prototype.playMusic = function(){
//     return `Listening to ${this.title} from ${this.tech}`;
// }

// const entertainment1 = new Game("PC", "Battlefield", "FPS", 9);
// const entertainment2 = new Movie("English", "The Godfather II", "Action/Thriller", 9.5);
// const entertainment3 = new Music("CD", "Babymetal - BxMxC", "Popmetal", 8.5);

// console.log(entertainment1.printInfo());
// console.log(entertainment1.playGame());

// console.log(entertainment2.printInfo());
// console.log(entertainment2.playMovie());

// console.log(entertainment3.printInfo());
// console.log(entertainment3.playMusic());

// ========================================
// Constructors, methods en prototypes in praktijk met Create() methode
// ========================================

function Entertainment(title, genre, rating){
    this.title = title;
    this.genre = genre;
    this.rating = rating;
}

function Game(platform, title, genre, rating){
    Entertainment.call(this, title, genre, rating);
    this.platform = platform;
    this.type = this.constructor.name;
}

function Movie(lang, title, genre, rating){
    Entertainment.call(this, title, genre, rating);
    this.lang = lang;
    this.type = this.constructor.name;
}

function Music(tech, title, genre, rating){
    Entertainment.call(this, title, genre, rating);
    this.tech = tech;
    this.type = this.constructor.name;
}

Game.prototype = Object.create(Entertainment.prototype);
Movie.prototype = Object.create(Entertainment.prototype);
Music.prototype = Object.create(Entertainment.prototype);

Entertainment.prototype.printInfo = function(){
    return (`Type: ${this.type}. Title: ${this.title}. Genre: ${this.genre}. Stars: ${this.rating}`);
}

Game.prototype.playGame = function(){
    return `Playing ${this.title} on ${this.platform}`;
}
Movie.prototype.playMovie = function(){
    return `Watching ${this.title} in ${this.lang} language`;
}
Music.prototype.playMusic = function(){
    return `Listening to ${this.title} from ${this.tech}`;
}

const entertainment1 = new Game("PC", "Battlefield", "FPS", 9);
const entertainment2 = new Movie("English", "The Godfather II", "Action/Thriller", 9.5);
const entertainment3 = new Music("CD", "Babymetal - BxMxC", "Popmetal", 8.5);

console.log(entertainment1.printInfo());
console.log(entertainment1.playGame());

console.log(entertainment2.printInfo());
console.log(entertainment2.playMovie());

console.log(entertainment3.printInfo());
console.log(entertainment3.playMusic());