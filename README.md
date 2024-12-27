# **Movie Browser**

## **Table of Contents**

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Required Features](#required-features)
- [Additional Features](#additional-features)
- [Development Decisions](#development-decisions)
  <!-- - [Possible Improvements](#possible-improvements) -->

---

## **Introduction**

This project is a movie-browsing web application that allows users to search for movies with advanced filtering options and save their favorite movies. The application is responsive and accessible.

---

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

## **Additional Features**

- Dark mode
- Reset Genre selection
- Multiple Genre selection
- Error page

---

## **Development Decisions**

### **1. Framework and Tooling**

- **Vite**: Chosen for its speed and simplicity.
- **React**: For small and frontend only project.
- **TypeScript**: Ensures type safety, reducing bugs and enhancing maintainability.
- **React Router**: To create routes for movies, tv shows etc.

### **2. Styling**

- **Tailwind CSS**: For utility-first approach and design consistency.

### **3. Public API**

- TMDb offers a developer-friendly interface with a free tier and is often seen as better documented and actively maintained for wider development use.

### **3. Data fetching**

- **Tanstack Query**: React/Tanstack Query would be the better option to handle things like caching, pagination, and background refetching automatically, making it easier to manage large data sets efficiently.
- **Fetch**: It is a native solution, with minimal dependencies and potential performance gains.
- Using the authentication API key in header.

### **3. Accessibility and SEO**

- **Tool to check**: WAVE Web Accessibility Evaluation Tools and Accessible Rich Internet Applications (ARIA) extension for online accessibility checking.
- SVG are better for SEO.
- Use aria-label and proper html semantics

### **3. Optimization**

- webp format for images.
- Debouncing in movie searching.
- Caching using Tanstack React Query.
- Avoid filtering the movies to get favourite movies because the favourite movies can be scattered in many pages and in worst case we might need to fetch all the pages, on the other hand while fetching favourite movies the worst case would be all the available movies(but this is very likely not to happen). Using [Dynamic Parallel Queries with useQueries](https://tanstack.com/query/v4/docs/framework/react/guides/parallel-queries#dynamic-parallel-queries-with-usequeries) in Tanstack
<!-- - Avoid fetching the favourite movies from tmdb, instead filter non-favourite from the Tanstack cached movies using localstorage favourite data. -->

### **3. State Management**

- Context API with useReducer.

---

## **Possible Improvements**

- List to show users favourite movies.
- Using other apis like TV shows and all.
- Slider for Genre with next and previous buttons.
- Somehow reducing the distance between filters and the output list.
- Making navbar scroll sensitive.

---
