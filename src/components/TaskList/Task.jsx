import React from 'react';
import TaskTitle from './TaskTitle';
import styles from './TaskList.module.css';

const Task = ({ id, title = 'untitled', done = false, onToggle = () => {}, onDelete = () => {}, onRename = () => {} }) => {
    return (
        <article className={styles.task} data-done={done ? 'true' : 'false'}>
            <label className={styles.taskLabel}>
                <input
                    type="checkbox"
                    className={styles.taskCheckbox}
                    checked={done}
                    onChange={() => onToggle(id)}
                    aria-label={`Mark "${title}" as ${done ? 'not done' : 'done'}`}
                />
                <TaskTitle id={id} title={title} onRename={onRename} />
            </label>

            <button
                type="button"
                className={styles.taskDelete}
                onClick={(e) => { e.stopPropagation(); onDelete(id); }}
                aria-label={`Delete "${title}"`}
            >
                -
            </button>
        </article>
    );
};

export default Task;
