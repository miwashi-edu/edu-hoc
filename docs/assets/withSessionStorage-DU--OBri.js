import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-BE45qQWD.js";import"./iframe-DqL-CiGg.js";import"./preload-helper-PPVm8Dsz.js";function t(s){const e={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"withtransientstorage",children:"withTransientStorage"}),`
`,n.jsx(e.h2,{id:"transient",children:"Transient"}),`
`,n.jsxs(e.p,{children:["This HOC adds ",n.jsx(e.strong,{children:"persistency"}),` over a session, an ability to maintain states over refresh, but not restart, it uses session storage
for persistent storage during a session.`]}),`
`,n.jsxs(e.p,{children:["It is a ",n.jsx(e.strong,{children:"HOC"}),", a ",n.jsx(e.em,{children:"Higher Order Component"}),`, it has no view, only function, and enhances the Component it uses with transient
storage.`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`//index.js
import withSessionStorage from './withSessionStorage';
import TodoList from './TodoList';


export const SessionStorageTodoList = withSessionStorage(TodoList);
`})})]})}function d(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{d as default};
