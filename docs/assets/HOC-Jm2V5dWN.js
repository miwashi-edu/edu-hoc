import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-BE45qQWD.js";import"./iframe-DqL-CiGg.js";import"./preload-helper-PPVm8Dsz.js";function o(t){const e={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"higher-order-component-hoc",children:"Higher Order Component (HOC)"}),`
`,n.jsxs(e.p,{children:["A ",n.jsx(e.strong,{children:"Higher-Order Component (HOC)"}),` in React is a function that takes a component and returns a new one with extra behavior.
It’s like `,n.jsx(e.strong,{children:"dependency injection"})," for components — adding logic such as state, data, or context without modifying the original."]}),`
`,n.jsxs(e.p,{children:["Conceptually, it’s similar to ",n.jsx(e.strong,{children:"polymorphism"})," in object-oriented programming: instead of subclassing or overriding methods, you wrap components to extend their behavior dynamically."]}),`
`,n.jsxs(e.p,{children:["In short, HOCs enable ",n.jsx(e.strong,{children:"code reuse and behavioral composition"}),", React’s functional alternative to OOP inheritance."]}),`
`,n.jsx(e.h2,{id:"naming",children:"Naming"}),`
`,n.jsxs(e.p,{children:["In React, components must start with a capital letter (",n.jsx(e.strong,{children:"PascalCase"}),`) so JSX knows to treat them as custom components — not HTML tags.
Example:`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const TodoList = () => {
  return(<></>);
}
`})}),`
`,n.jsxs(e.p,{children:["Now, a ",n.jsx(e.em,{children:"Higher-Order Component (HOC)"})," is ",n.jsx(e.strong,{children:"not"})," a component — it’s a ",n.jsx(e.strong,{children:"function"}),` that takes a component and returns a new one.
Since it’s just a function, we name it in `,n.jsx(e.strong,{children:"camelCase"}),", like any other utility."]}),`
`,n.jsxs(e.p,{children:["We solve that by wrapping the given component inside a new ",n.jsx(e.strong,{children:"functional component"}),`, which is written in
`,n.jsx(e.em,{children:"PascalCase"})," so React recognizes it as a component."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`function withExtraLogic(WrappedComponent) {
  return function WithExtraLogic(props) {
    return <WrappedComponent {...props} />;
  };
}
`})}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.p,{children:"Combining an HOC with a Component to create a new injected version."}),`
`,n.jsx(e.p,{children:"Now that we have the pattern, we can use different HOCs to inject different storage behaviors into the same base UI component."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`//index.js
import TodoList from './TodoList';
import withTransientStorage from './withTransientStorage';
import withLocalStorage from './withLocalStorage';
import withSessionStorage from './withSessionStorage';

export const TransientTodoList = withTransientStorage(TodoList);
export const LocalTodoList     = withLocalStorage(TodoList);
export const SessionTodoList   = withSessionStorage(TodoList);
`})}),`
`,n.jsx(e.h2,{id:"transparency",children:"Transparency"}),`
`,n.jsxs(e.p,{children:["In ",n.jsx(e.code,{children:"return <WrappedComponent {...props} />"})," we use the spread operator, and that ensures the target ",n.jsx(e.em,{children:"WrappedComponent"}),` receives
the props we intend for it transparently, like we were using the only WrappedComponent. Or a better example is
`,n.jsx(e.code,{children:"return <WrappedComponent {...passTroughProps} />"})," as the naming is arbitrary."]})]})}function h(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{h as default};
