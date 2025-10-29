import React from 'react';
import styles from './TodoList.module.css';

const Task = ({id, title = 'untitled', done = false, onToggle = () => {}, onDelete = () => {},}) => {
    const handleOnToggle = (id) => onToggle(id);
    const handleOnDelete = (id) => onDelete(id);

    return (
        <article className={styles.task} data-done={done ? 'true' : 'false'}>
            <label className={styles.taskLabel}>
                <input
                    type="checkbox"
                    className={styles.taskCheckbox}
                    checked={done}
                    onChange={() => handleOnToggle(id)}
                    aria-label={`Mark "${title}" as ${done ? 'not done' : 'done'}`}
                />
                <span className={styles.taskTitle}>{title}</span>
            </label>

            <button
                type="button"
                className={styles.taskDelete}
                onClick={() => handleOnDelete(id)}
                aria-label={`Delete "${title}"`}
            >
                Delete
            </button>
        </article>
    )
};

export default Task;
