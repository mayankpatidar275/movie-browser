# **Movie Browser**

## **Table of Contents**
- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Required Features](#required-features)
- [Development Decisions](#development-decisions)
<!-- - [Additional Features](#additional-features) -->
<!-- - [Possible Improvements](#possible-improvements) -->


---

## **Introduction**
This project is a movie-browsing web application that allows users to search for movies with advanced filtering options and save their favorite movies. The application is responsive and accessible.

---

## **Required Features**
- Responsive and Mobile first UI.
- Display a list of movies on the homepage, including the movie title, poster image, and release year..
- Search movies by title.
- Search should update the list of movies as user types.
- Infinite scrolling (prefered not to use third-party solution).
- Advanced filtering options for movies, such as filtering by genre, release year range, and rating range. Filters should update the list of movies dynamically. [optional]
- Allow users to save their favorite movies. Favorite movies should be stored locally (e.g., using browser storage). [optional]
- Ensure the application is SEO-friendly and accessible to users with disabilities by following accessibility best practices.
- Clean and well-structured code following best practices
- Documentation explaining how to run the application, your design decisions, and any additional features implemented. Also, mention any possible improvements in your implementation.

---
<!-- ## **Additional Features**


--- -->

## **Getting Started**
### **Prerequisites**
Ensure you have the following installed:
- Node.js (>= 16.x)
- npm (>= 8.x) or yarn (>= 1.22.x)

### **Installation and running**
1. Clone the repository:
   ```bash
   git clone https://github.com/mayankpatidar275/movie-browser.git
   cd movie-browser
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open the application in your browser:
   Navigate to `http://localhost:5173`.

---

## **Development Decisions**
### **1. Framework and Tooling**
- **Vite**: Chosen for its speed and simplicity.
- **React**: For small and frontend only project.
- **TypeScript**: Ensures type safety, reducing bugs and enhancing maintainability.

### **2. Styling**
- **Tailwind CSS**: For utility-first approach and design consistency.

### **3. Public API**
- **Tailwind CSS**: IMDb API or TMDB API


---

<!-- ## **Possible Improvements** -->

<!-- --- -->
