# Dev Stack Builder

## Project Description

Dev Stack Builder is a React-based project where users can explore different technologies and create their own technology stack. Users can add technologies to the "Your Stack" section and manage their selected technologies easily.

## Technologies Used

* React
* JavaScript
* Tailwind CSS
* Vite
* HTML
* CSS

## Features

1. Users can explore different technologies and their details.
2. Users can add technologies to the "Your Stack" section and create their own stack.
3. Users can remove technologies from their stack and manage it dynamically.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. It makes React code easier to write and understand. React uses JSX to describe what the UI should look like.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and manage data inside a component. State can change over time, but props are read-only.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to create and manage state in a React component. I used `useState` to manage the technologies added to the "Your Stack" section and update the stack when users add or remove technologies.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to perform side effects in a React component. I used it to load the JSON data when the component starts, so the technology information can be displayed in the project.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It helps React understand which items have changed, been added, or been removed, so it can update the UI efficiently.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content depending on a condition. I used it to show a message when the "Your Stack" section is empty.

For example:

```jsx
{stack.length === 0 && (
  <p>Your stack is empty.</p>
)}
```

This message is displayed only when the stack has no items.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using props. If the child needs to send something back to the parent, the parent can pass a function as a prop, and the child can call that function with the required data.
