### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

- React is a JavaScript library for building websites. You would want to use React when you want to make asynchronous, responsive, modular websites. React is a good tool to use because it allows one to easily make reusable parts of the website and focuses on the front-end experience.

- What is Babel?

- Babel is a JavaScript compiler that takes modern versions of JavaScript and converts them into older versions. The reason we use Babel is because not all browsers are compatible with the latest JavaScript features. Babel allows you to write modern JavaScript and still have it work in nearly any browser.

- What is JSX?

- JSX is an extension that allows one to write HTML like in React allowing for easy development of the UI structures.

- How is a Component created in React?

- First, you need to import React into your JavaScript file. From there, you would create a function. You can optionally include a prop to be used later in the function. Inside the function, you need to return the HTML JSX you want to display. You can only return one element, but you can wrap multiple elements in a <div> or <> </> to return them together.

- What are some difference between state and props?

- Props allow for the transfer of data and properties between components. Props are immutable. State is part of a component and represents the data inside it. This data is mutable and can be changed. When the state changes, React re-renders the component to reflect the new data.

- What does "downward data flow" refer to in React?

- Downward data flow refers to the interaction from a parent component to a child component through props. Changes made within the child component do not affect the data in the parent component.

- What is a controlled component?

- A controlled components is an element whose stat is controlled by React it self. This means that any changes are done through React and update through many of the setStates(). This allows for validate froms in real time. This also allows for complex forms instants, feedback, and dynamic UI.

- What is an uncontrolled component?

- AN uncontrolled component are elements that is not controlled by React. Data flows from input to React only when accessed via refs often during from submissions. These are simple forms and easy to implement but not food for modular or dynamic sites.

- What is the purpose of the `key` prop when rendering a list of components?

- Keys are a unquie marker that is assined to each prop with in a lsit this allows one to reference it late.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

-The reason why array index is a poor choice for a key prop is because the posiition of a prop in an array can change with the adding and removing of items in the array. It makes it unrealiable if you want the array to change at any point.

- Describe useEffect. What use cases is it used for in React components?

- The useEffect in ReactJS is used to handle the side effects such as fetching data and updating DOM. This hook runs on every render but there is also a way of using a dependency array using which we can control the effect of rendering. It can be used to perform actions such as: Fetching data from an API. Setting up event listeners or subscriptions. And Much More.

- What does useRef do? Does a change to a ref value cause a rerender of a component?

- useRef is a Hook and is used to create an odject that can presist accross renders with out causing the component to re-render when updated.

- no the compnent dose not re-render when the ref valuse changes.

- When would you use a ref? When wouldn't you use one?

- When you want a value to affect what is shown to the user, you should use state instead. A good use for ref is when you want to use a third-party tool or store values between renders without triggering a re-render.

- What is a custom hook in React? When would you want to write one?

A custom hook is a hook created by a user in React. It allows for reusable, modular logic that can be used in many different components. Custom hooks help reduce duplicate code, share stateful logic, and clean up components. An example where a custom hook could be useful is in handling API calls or form submissions.
