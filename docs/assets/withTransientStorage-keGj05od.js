import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-BE45qQWD.js";import"./iframe-DqL-CiGg.js";import"./preload-helper-PPVm8Dsz.js";function s(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t.h1,{id:"withtransientstorage",children:"withTransientStorage"}),`
`,n.jsx(t.h2,{id:"transient",children:"Transient"}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Transient"})," is the opposite of ",n.jsx(t.strong,{children:"persistent"}),`, something that passes, and in this case it doesn't hold state over
a refresh of the browser. It is a Component usable for tests.`]}),`
`,n.jsxs(t.p,{children:["It is a ",n.jsx(t.strong,{children:"HOC"}),", a ",n.jsx(t.em,{children:"Higher Order Component"}),`, it has no view, only function, and enhances the Component it uses with transient
storage.`]}),`
`,n.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-js",children:`//index.js
import withTransientStorage from './withTransientStorage';
import TodoList from './TodoList';


export const TransientTodoList = withTransientStorage(TodoList);
`})})]})}function d(e={}){const{wrapper:t}={...o(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(s,{...e})}):s(e)}export{d as default};
