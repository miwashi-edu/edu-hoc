import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-BE45qQWD.js";import"./iframe-DqL-CiGg.js";import"./preload-helper-PPVm8Dsz.js";function o(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"withlocalstorage",children:"withLocalStorage"}),`
`,e.jsx(n.h2,{id:"transient",children:"Transient"}),`
`,e.jsxs(n.p,{children:["This HOC adds ",e.jsx(n.strong,{children:"persistency"}),`, an ability to maintain states over refresh, and restart, it uses local storage
for persistent storage over time.`]}),`
`,e.jsxs(n.p,{children:["It is a ",e.jsx(n.strong,{children:"HOC"}),", a ",e.jsx(n.em,{children:"Higher Order Component"}),`, it has no view, only function, and enhances the Component it uses with persistency
in local storage.`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`//index.js
import withLocalStorage from './withLocalStorage';
import TodoList from './TodoList';

export const LocalStorageTodoList = withLocalStorage(TodoList);
`})})]})}function h(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{h as default};
