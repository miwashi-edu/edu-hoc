import React, { useEffect, useRef, useState } from 'react';
import styles from './TaskList.module.css';

const TaskTitle = ({ id, title, onRename = () => {} }) => {
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(title ?? 'untitled');
    const inputRef = useRef(null);

    useEffect(() => setValue(title ?? 'untitled'), [title]);

    useEffect(() => {
        if (editing && inputRef.current) inputRef.current.focus();
    }, [editing]);

    const enterEdit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setEditing(true);
    };

    const confirm = (e) => {
        e?.preventDefault?.();
        e?.stopPropagation?.();
        const next = value.trim() || 'untitled';
        onRename(id, next);
        setEditing(false);
    };

    const cancel = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setValue(title ?? 'untitled');
        setEditing(false);
    };

    const onKeyDown = (e) => {
        if (e.key === 'Enter') confirm(e);
        if (e.key === 'Escape') cancel(e);
    };

    if (!editing) {
        return (
            <span
                className={styles.taskTitle}
                onMouseDown={(e) => e.preventDefault()}
                onClick={enterEdit}
                title="Click to edit"
            >
        {title}
      </span>
        );
    }

    return (
        <form
            className={styles.titleEditRow}
            onSubmit={confirm}
            onClick={(e) => e.stopPropagation()}
        >
            <input
                ref={inputRef}
                className={styles.titleInput}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={onKeyDown}
                onMouseDown={(e) => e.preventDefault()}
                aria-label="Edit task title"
            />
            <button
                type="submit"
                className={styles.okButton}
                onMouseDown={(e) => e.preventDefault()}
            >
                ✓
            </button>
            <button
                type="button"
                className={styles.cancelButton}
                onClick={cancel}
                onMouseDown={(e) => e.preventDefault()}
            >
                ✕
            </button>
        </form>
    );
};

export default TaskTitle;
