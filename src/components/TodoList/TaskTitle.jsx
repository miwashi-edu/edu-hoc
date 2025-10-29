import React, { useEffect, useRef, useState } from 'react';
import styles from './TodoList.module.css';

const TaskTitle = ({ id, title, onRename = () => {} }) => {
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(title ?? 'untitled');
    const inputRef = useRef(null);

    // Keep local state in sync if title changes from outside
    useEffect(() => setValue(title ?? 'untitled'), [title]);

    // Autofocus when entering edit mode
    useEffect(() => {
        if (editing && inputRef.current) inputRef.current.focus();
    }, [editing]);

    const enterEdit = (e) => {
        // prevent the label from toggling the checkbox
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

    const onKeyDown = (e) => {
        if (e.key === 'Enter') confirm(e);
        if (e.key === 'Escape') {
            e.preventDefault();
            e.stopPropagation();
            setValue(title ?? 'untitled');
            setEditing(false);
        }
    };

    if (!editing) {
        return (
            <span
                className={styles.taskTitle}
                onMouseDown={(e) => e.preventDefault()}    // block label default early
                onClick={enterEdit}
                title="Click to edit"
            >
        {title}
      </span>
        );
    }

    return (
        <form className={styles.titleEditRow} onSubmit={confirm} onClick={(e) => e.stopPropagation()}>
            <input
                ref={inputRef}
                className={styles.titleInput}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={onKeyDown}
                onMouseDown={(e) => e.preventDefault()}   // keep label from toggling
                aria-label="Edit task title"
            />
            <button
                type="submit"
                className={styles.okButton}
                onMouseDown={(e) => e.preventDefault()}   // avoid label toggle
            >
                OK
            </button>
        </form>
    );
};

export default TaskTitle;
