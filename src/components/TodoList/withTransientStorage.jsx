// withTransientStorage.js
import React, { useState } from 'react';
import Header from './Header.jsx';
import { generateID, toTask } from './util';

const withTransientStorage = (WrappedComponent) => {
    const WithTransientStorage = ({ seed = [], ...rest }) => {
        const [data, setData] = useState(() =>
            Array.isArray(seed) ? seed.map(toTask) : []
        );

        const addUntitledTask = () => {
            setData((cur) => [...cur, { id: generateID(), title: 'untitled', done: false }]);
        };

        const onToggle = (id) => {
            console.log("Toggling");
            setData((cur) => cur.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
        };

        const onDelete = (id) => {
            console.log("Deleting");
            setData((cur) => cur.filter((t) => t.id !== id));
        };

        return (
            <Header title="Transient Todos" onAddTask={addUntitledTask}>
                <WrappedComponent
                    data={data}
                    setData={setData}
                    onToggle={onToggle}
                    onDelete={onDelete}
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
