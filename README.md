# Higher Order Component (HOC)

[Try it](https://miwashi-edu.github.io/edu-hoc)

A **Higher-Order Component (HOC)** in React is a function that takes a component and returns a new one with extra behavior.
It’s like **dependency injection** for components — adding logic such as state, data, or context without modifying the original.

Conceptually, it’s similar to **polymorphism** in object-oriented programming: instead of subclassing or overriding methods, you wrap components to extend their behavior dynamically.

In short, HOCs enable **code reuse and behavioral composition**, React’s functional alternative to OOP inheritance.

## Naming

In React, components must start with a capital letter (**PascalCase**) so JSX knows to treat them as custom components — not HTML tags.
Example:
```jsx
const TodoList = () => {
  return(<></>);
}
```

Now, a *Higher-Order Component (HOC)* is **not** a component — it’s a **function** that takes a component and returns a new one.
Since it’s just a function, we name it in **camelCase**, like any other utility.

We solve that by wrapping the given component inside a new **functional component**, which is written in
*PascalCase* so React recognizes it as a component.

```jsx
function withExtraLogic(WrappedComponent) {
  return function WithExtraLogic(props) {
    return <WrappedComponent {...props} />;
  };
}
```

## Usage

Combining an HOC with a Component to create a new injected version.

Now that we have the pattern, we can use different HOCs to inject different storage behaviors into the same base UI component.

```js
//index.js
import TodoList from './TodoList';
import withTransientStorage from './withTransientStorage';
import withLocalStorage from './withLocalStorage';
import withSessionStorage from './withSessionStorage';

export const TransientTodoList = withTransientStorage(TodoList);
export const LocalTodoList     = withLocalStorage(TodoList);
export const SessionTodoList   = withSessionStorage(TodoList);
```

## Transparency

In `return <WrappedComponent {...props} />` we use the spread operator, and that ensures the target *WrappedComponent* receives
the props we intend for it transparently, like we were using the only WrappedComponent. Or a better example is
`return <WrappedComponent {...passTroughProps} />` as the naming is arbitrary.
