import React, { useEffect, useState } from 'react';
import Header from './Header.jsx';
import { generateID, toTask } from './util';

const DEFAULT_STORAGE_KEY = 'tasks-session';

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
                title="Session Tasks"
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
        `withSessionStorage(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return WithSessionStorage;
};

export default withSessionStorage;
