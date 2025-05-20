/*  

Build a Library Project

This project is a part of the Codecademy JavaScript course, focusing on object-oriented programming (OOP) concepts.
This code defines a media management system using JavaScript classes. Here’s a breakdown of its structure:

1. The Media Class (Base Class)
Represents a general media item.

Properties:

_title: Stores the media’s title.

_isCheckedOut: Tracks whether the item is checked out (default: false).

_ratings: Holds user ratings.

Methods:

getAverageRating(): Computes the average rating.

toggleCheckOutStatus(): Switches the checkout status.

addRating(rating): Adds a new rating.

2. Subclasses (Book, Movie, CD)
Each subclass extends Media to represent specific types of media.

Book: Adds properties for author and pages.

Movie: Includes director and runTime.

CD: Stores artist and songs.

3. Creating & Using Objects
Example objects (historyOfEverything, speed) are created from Book and Movie classes:

Checkout status is toggled.

Ratings are added and averaged.

Values are displayed with console.log().

*/


// Base class for all media types
class Media {
  constructor(title) {
    this._title = title;  // Title of the media item
    this._isCheckedOut = false;  // Indicates whether the item is checked out
    this._ratings = [];  // Stores user ratings
  }

  // Getter for the title
  get title() {
    return this._title;
  }

  // Getter for checkout status
  get isCheckedOut() {
    return this._isCheckedOut;
  }

  // Getter for ratings
  get rating() {
    return this._ratings;
  }

  // Calculates the average rating of the media item
  getAverageRating() {
    let avgRating = 0;
    if (this._ratings.length === 0) {
      return 0;  // Return 0 if there are no ratings
    } else {
      for (let i = 0; i < this._ratings.length; i++) {
        avgRating += this._ratings[i];  // Sum up all ratings
      }
      avgRating /= this._ratings.length;  // Divide by total number of ratings
      return avgRating;  // Return the calculated average
    }
  }

  // Toggles the checkout status of the media item
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  // Adds a rating to the media item
  addRating(rating) {
    this._ratings.push(rating);
  }
}

// Subclass for books, extending Media
class Book extends Media {
  constructor(author, title, pages) {
    super(title);  // Call the parent constructor
    this._author = author;  // Store author's name
    this._pages = pages;  // Store number of pages
  }

  // Getter for author
  get author() {
    return this._author;
  }

  // Getter for pages
  get pages() {
    return this._pages;
  }
}

// Subclass for movies, extending Media
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);  // Call the parent constructor
    this._director = director;  // Store director's name
    this._runTime = runTime;  // Store movie runtime
  }

  // Getter for director
  get director() {
    return this._director;
  }

  // Getter for runtime
  get runTime() {
    return this._runTime;
  }
}

// Subclass for CDs, extending Media
class CD extends Media {
  constructor(artist, title, songs) {
    super(title);  // Call the parent constructor
    this._artist = artist;  // Store artist's name
    this._songs = songs;  // Store list of songs
  }

  // Getter for artist
  get artist() {
    return this._artist;
  }

  // Getter for songs
  get songs() {
    return this._songs;
  }
}

// Creating a book instance
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

console.log(historyOfEverything.isCheckedOut);  // Check initial checkout status
historyOfEverything.toggleCheckOutStatus();  // Toggle checkout status
console.log(historyOfEverything.isCheckedOut);  // Check updated status

// Adding ratings to the book
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());  // Display average rating

// Creating a movie instance
const speed = new Movie('Jan de Bont', 'Speed', 116);

console.log(speed.isCheckedOut);  // Check initial checkout status
speed.toggleCheckOutStatus();  // Toggle checkout status
console.log(speed.isCheckedOut);  // Check updated status

// Adding ratings to the movie
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());  // Display average rating
