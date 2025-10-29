import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-mQuddbTl.js";import"./iframe-DckVNL-3.js";import"./preload-helper-PPVm8Dsz.js";function s(t){const e={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"withtransientstorage",children:"withTransientStorage"}),`
`,n.jsx(e.h2,{id:"transient",children:"Transient"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Transient"})," is the opposite of ",n.jsx(e.strong,{children:"persistent"}),`, something that passes, and in this case it doesn't hold state over
a refresh of the browser. It is a Component usable for tests.`]}),`
`,n.jsxs(e.p,{children:["It is a ",n.jsx(e.strong,{children:"HOC"}),", a ",n.jsx(e.em,{children:"Higher Order Component"}),`, it has no view, only function, and enhances the Component it uses with transient
storage.`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`//index.js
import withTransientStorage from './withTransientStorage';
import TodoList from './TodoList';


export const TransientTodoList = withTransientStorage(TodoList);
`})}),`
`,n.jsx(e.h2,{id:"design",children:"Design"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import React, { useState } from 'react';
import Header from './Header.jsx';
import { generateID, toTask } from './util';

const withTransientStorage = (WrappedComponent) => {
    const WithTransientStorage = ({ seed = [], ...rest }) => {
        const [data, setData] = useState(() => (Array.isArray(seed) ? seed.map(toTask) : []));
        const [isSortAsc, setIsSortAsc] = useState(true);

        const addUntitledTask = () => {
            setData((cur) => [...cur, { id: generateID(), title: 'untitled', done: false }]);
        };

        const onToggle = (id) => {
            setData((cur) => cur.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
        };

        const onDelete = (id) => {
            setData((cur) => cur.filter((t) => t.id !== id));
        };

        const onRename = (id, nextTitle) => {
            setData((cur) => cur.map((t) => (t.id === id ? { ...t, title: nextTitle } : t)));
        };

        const onToggleSort = () => {
            setIsSortAsc((prev) => !prev);
            setData((prev) => {
                const next = [...prev];
                // asc: incomplete(false) → done(true); desc: reverse
                next.sort((a, b) => (isSortAsc ? Number(b.done) - Number(a.done) : Number(a.done) - Number(b.done)));
                return next;
            });
        };

        return (
            <Header
                title="Transient Todos"
                onAddTask={addUntitledTask}
                onToggleSort={onToggleSort}
                isSortAsc={isSortAsc}
            >
                <WrappedComponent
                    data={data}
                    setData={setData}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onRename={onRename}
                    {...rest}
                />
            </Header>
        );
    };

    WithTransientStorage.displayName =
        \`withTransientStorage(\${WrappedComponent.displayName || WrappedComponent.name || 'Component'})\`;

    return WithTransientStorage;
};

export default withTransientStorage;
`})})]})}function c(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{c as default};
