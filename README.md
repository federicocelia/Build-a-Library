# 📚 Build a Library Project

## 📝 Overview
This project is part of the **Codecademy JavaScript course**, demonstrating **Object-Oriented Programming (OOP)** concepts using **JavaScript classes**. It defines a **media management system**, allowing users to create and track different types of media such as books, movies, and CDs.

## 🏗️ Project Structure
### **1. `Media` Class (Base Class)**
Represents a general media item with essential properties and methods.

- **Properties:**
  - `_title`: Stores the media’s title.
  - `_isCheckedOut`: Tracks whether the item is checked out (default: `false`).
  - `_ratings`: Holds user ratings.

- **Methods:**
  - `getAverageRating()`: Computes the average rating.
  - `toggleCheckOutStatus()`: Switches the checkout status.
  - `addRating(rating)`: Adds a new rating.

### **2. Subclasses (`Book`, `Movie`, `CD`)**
Each subclass extends `Media` to represent specific media types.
- **`Book`**: Adds `author` and `pages`.
- **`Movie`**: Includes `director` and `runTime`.
- **`CD`**: Stores `artist` and `songs`.

### **3. Example Usage**
Instances of `Book` and `Movie` are created, demonstrating:
- Checkout status toggling.
- Adding and averaging user ratings.
- Logging results to the console.

## 🚀 Features
- Supports multiple media types.
- Implements OOP principles (Encapsulation, Inheritance).
- Provides interactive checkout and rating functionalities.

## 🔧 Installation & Usage
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/library-project.git
   cd library-project
