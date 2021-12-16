### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a front-end JS library for building user interfaces that are complex and 
responsive for web applications.
If your app has many components with changing states, user logins and other dynamic 
inputs.
- What is Babel?
Babel is a tool to convert ECMASCRIPT 2015 and newer code into a backwards compatible version of 
JS in current and older browsers or environments.
- What is JSX?
It's a syntax extension to JS. JSX produces React elements. 
It helps us to embed JS expressions and functions inside of HTML elements.
Most people find it helpful as a visual aid when working with UI inside the JavaScript code.
- How is a Component created in React?
Components can be created anywhere inside of your project.
There are 2 ways of creating Components: Functional components and class-based components.
- What are some difference between state and props?
Props is short for properties and they are used to pass data between React components. 
State is a built-in object created by React, which allows components to create and manage their own data. So unlike props, components cannot pass data with state, but they can create and manage it internally.
- What does "downward data flow" refer to in React?
Data is transmitted between the elements in React from top to bottom (parent to children)
It facilitates debugging and it ensures that the parent structure don’t get affected by any 
modifications in its child structure.
 In a controlled component, form data is handled by a React component.
- What is an uncontrolled component?
In uncontrolled components form data is handled by the DOM itself.  
Instead of writing an event handler for every state update, 
you can use a ref to get form values from the DOM.
- What is the purpose of the `key` prop when rendering a list of components?
Key prop helps React identify which items have changed, are added, or are removed.
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
When there's a rerender React assumes the key is the index, so in changes of state, 
the indices will be shifted and React might mismatch the keys with values.
- Describe useEffect.  What use cases is it used for in React components?
Built in hook for “side effects”.
Fetching data, starting a timer, and manually changing the DOM are all side effects
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
React's useRef hook, short for reference, allows us to persist data across renders 
without causing the component to rerender. 
- When would you use a ref? When wouldn't you use one?
A typical use case for this hook would be to store a DOM element, 
which we can use to access it programmatically. 
You can also use it to keep a reference to the previous state of a component.
By default React's state and prop system is the best and most reliable way to 
communicate between components. 
- What is a custom hook in React? When would you want to write one?
A custom hook is a JavaScript function that typically uses built in hooks.
We use it when we have same business logic inside of multiple components.