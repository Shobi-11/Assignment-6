class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    displayInfo() {
        console.log(`Movie Info:`);
        console.log(`Title:${this.title}`);
        console.log(`Studio:${this.studio}`);
        console.log(`Rating:${this.rating}`);
    }
    getrating() {
        return "the rating is " + this.rating;
    }
}
let movie1 = new Movie('Jailer', 'Cinema Studio', 'PG13');
movie1.displayInfo();

/* b.) The constructor for the class Movie will set the class 
property rating to "PG" as default when no rating is provided.*/

class Movie2 {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = "PG";
    }
    displayInfo() {
        console.log(`Movie Info:`);
        console.log(`Title:${this.title}`);
        console.log(`Studio:${this.studio}`);
        console.log(`Rating:${this.rating}`);
    }
}
let movie2 = new Movie2('Beast', 'AVM Studio');
movie2.displayInfo();

/* c) Write a piece of code that creates an instance of the class Movie with 
the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13” */

class Movie3 {
    constructor(title, studio, rating) {
        this.title = "Casino Royal";
        this.studio = "Eon Productions";
        this.rating = "PG13";
    }
}
const CasinoRoyale = new Movie3("Casino Royal", "Eon Productions", "PG13");
let movie3 = new Movie3();
console.log(movie3);