import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-DpGBiBr0.js";import"./iframe-BCkc3reA.js";import"./preload-helper-PPVm8Dsz.js";function s(t){const e={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"withtransientstorage",children:"withTransientStorage"}),`
`,n.jsx(e.h2,{id:"transient",children:"Transient"}),`
`,n.jsxs(e.p,{children:["This HOC adds ",n.jsx(e.strong,{children:"persistency"}),` over a session, an ability to maintain states over refresh, but not restart, it uses session storage
for persistent storage during a session.`]}),`
`,n.jsxs(e.p,{children:["It is a ",n.jsx(e.strong,{children:"HOC"}),", a ",n.jsx(e.em,{children:"Higher Order Component"}),`, it has no view, only function, and enhances the Component it uses with transient
storage.`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`//index.js
import withSessionStorage from './withSessionStorage';
import TaskList from './TaskList';


export const SessionStorageTodoList = withSessionStorage(TaskList);
`})}),`
`,n.jsx(e.h2,{id:"design",children:"Design"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import React, { useEffect, useState } from 'react';
import Header from './Header.jsx';
import { generateID, toTask } from './util';

const DEFAULT_STORAGE_KEY = 'todos-session';

const readFromStorage = (key) => {
    try {
        if (typeof window === 'undefined' || !window.sessionStorage) return null;
        const raw = window.sessionStorage.getItem(key);
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
};

const writeToStorage = (key, value) => {
    try {
        if (typeof window === 'undefined' || !window.sessionStorage) return;
        window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch {
        /* noop */
    }
};

const applySort = (list, asc) =>
    [...list].sort((a, b) => (asc ? Number(a.done) - Number(b.done) : Number(b.done) - Number(a.done)));

const withSessionStorage = (WrappedComponent) => {
    const WithSessionStorage = ({ seed = [], storageKey = DEFAULT_STORAGE_KEY, ...rest }) => {
        const [isSortAsc, setIsSortAsc] = useState(true); // incomplete → done
        const [data, setData] = useState(() => {
            const saved = readFromStorage(storageKey);
            const base = Array.isArray(saved) ? saved : (Array.isArray(seed) ? seed.map(toTask) : []);
            return applySort(base, isSortAsc);
        });

        useEffect(() => {
            writeToStorage(storageKey, data);
        }, [data, storageKey]);

        const addUntitledTask = () => {
            setData((prev) =>
                applySort([...prev, { id: generateID(), title: 'untitled', done: false }], isSortAsc)
            );
        };

        const onToggle = (id) => {
            setData((prev) =>
                applySort(prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)), isSortAsc)
            );
        };

        const onDelete = (id) => {
            setData((prev) => prev.filter((t) => t.id !== id));
        };

        const onRename = (id, nextTitle) => {
            setData((prev) => prev.map((t) => (t.id === id ? { ...t, title: nextTitle } : t)));
        };

        const onToggleSort = () => {
            setIsSortAsc((prevAsc) => {
                const nextAsc = !prevAsc;
                setData((prev) => applySort(prev, nextAsc));
                return nextAsc;
            });
        };

        return (
            <Header
                title="Session Todos"
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

    WithSessionStorage.displayName =
        \`withSessionStorage(\${WrappedComponent.displayName || WrappedComponent.name || 'Component'})\`;

    return WithSessionStorage;
};

export default withSessionStorage;
`})})]})}function c(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{c as default};
