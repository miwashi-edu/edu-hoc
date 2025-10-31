import React, { useState } from 'react';
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
                title="Transient Tasks"
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
        `withTransientStorage(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return WithTransientStorage;
};

export default withTransientStorage;
