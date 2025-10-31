import React, { useEffect, useState } from 'react';
import Header from './Header.jsx';
import { generateID, toTask } from './util';

const DEFAULT_STORAGE_KEY = 'tasks-local';

const readFromStorage = (key) => {
    try {
        if (typeof window === 'undefined' || !window.localStorage) return null;
        const raw = window.localStorage.getItem(key);
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
};

const writeToStorage = (key, value) => {
    try {
        if (typeof window === 'undefined' || !window.localStorage) return;
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
    }
};

const applySort = (list, asc) =>
    [...list].sort((a, b) => (asc ? Number(a.done) - Number(b.done) : Number(b.done) - Number(a.done)));

const withLocalStorage = (WrappedComponent) => {
    const WithLocalStorage = ({
                                  seed = [],
                                  storageKey = DEFAULT_STORAGE_KEY,
                                  ...rest
                              }) => {
        const [isSortAsc, setIsSortAsc] = useState(true); // true: incomplete → done
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
            setData((prev) =>
                prev.map((t) => (t.id === id ? { ...t, title: nextTitle } : t))
            );
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
                title="Local Tasks"
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

    WithLocalStorage.displayName =
        `withLocalStorage(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return WithLocalStorage;
};

export default withLocalStorage;
