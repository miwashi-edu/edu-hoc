import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-DpGBiBr0.js";import"./iframe-BCkc3reA.js";import"./preload-helper-PPVm8Dsz.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"tasklist",children:"TaskList"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"TaskList"})," is a storage-agnostic, presentational component."]}),`
`,e.jsxs(n.p,{children:["It renders a list of tasks ",e.jsx(n.code,{children:"Array<{ id: string; title: string; done: boolean }>"})," and exposes interaction hooks for a Higher-Order Component to supply behavior."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Provide ",e.jsx(n.code,{children:"onToggle(id)"}),"to provide a function to toggle a task between done and not done by id."]}),`
`,e.jsxs(n.li,{children:["Provide ",e.jsx(n.code,{children:"onDelete(id)"}),"to provide a function to delete a task by id."]}),`
`,e.jsxs(n.li,{children:["Provide ",e.jsx(n.code,{children:"onRename(id, nextTitle)"}),"to provide a function to delete a task by id, and nextTitle."]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import withTransientStorage from './withTransientStorage';
import withLocalStorage from './withLocalStorage';
import withSessionStorage from './withSessionStorage';
import withBackenStorage from './withBackenStorage';
import TaskList from './TaskList';


export const TransientTodoList = withTransientStorage(TaskList);
export const LocalStorageTodoList = withLocalStorage(TaskList);
export const SessionStorageTodoList = withSessionStorage(TaskList);
export const SessionBackenTodoList = withBackenStorage(TaskList);
`})}),`
`,e.jsx(n.h2,{id:"design",children:"Design"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const TaskList = ({ data = [], onToggle = () => {}, onDelete = () => {}, onRename = () => {} }) => {
    if (!Array.isArray(data) || data.length === 0) {
        return <div className={styles.empty}>No tasks yet</div>;
    }

    return (
        <div>
            {data.map((t) => (
                <Task
                    key={t.id ?? t.title}
                    id={t.id}
                    title={t.title}
                    done={!!t.done}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onRename={onRename}
                />
            ))}
        </div>
    );
};

`})})]})}function l(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{l as default};
