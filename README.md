# DevStack

DevStack is a simple and user-friendly web application that helps developers explore modern technologies and build their ideal development stack. Users can browse different technologies, add them to their stack, and remove them when needed.

## Features

**Explore Technologies** — Browse frontend, backend, database, language, styling, DevOps, and other development tools.
**Build Your Stack** — Add technologies to your personal stack and see the selected technology count.
**Easy Stack Management** — Remove individual technologies or clear the entire stack with one click.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify
- JSON

## Project Overview

The project is built with React and TypeScript. Technology information is loaded from a local JSON file and displayed as reusable technology cards. React state is used to manage the user's selected stack.

## 🧠 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. React uses JSX to make UI code easier to read, write, and understand.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.  
**State** is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets us create and update state in a React component. I used it in `App.tsx` to store the selected technologies in the `stack` state and update the stack when technologies are added or removed.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run side effects after a component renders, such as fetching data or working with external systems.

In this project, I did **not** use `useEffect` to load the JSON data. I used a fetch function that returns a Promise and then handled that Promise in the React component.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. A unique key helps React understand which item changed, was added, or was removed, so it can update the UI efficiently.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it in `YourStack.tsx`:

{
stack.length === 0 ? (

<div>Your stack is empty.</div>
) : (
<div>{/_ selected technologies _/}</div>
);
}

When the stack is empty, the empty-stack message is shown. Otherwise, the selected technologies are displayed.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child through **props**.

In this project, `App.tsx` passes `stack` and functions such as `addToStack` and `removeFromStack` to child components.

The child can send information back by calling a function received through props. For example, `TechnologyCard` calls `addToStack(technology)` when the user clicks **Add to Stack**.

## Project Status

This project was created as part of a React learning assignment and focuses on component-based design, state management, props, conditional rendering, responsive UI, and working with JSON data.
