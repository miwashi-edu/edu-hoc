import React from 'react';
import Task from './Task';
import styles from './TaskList.module.css';

const TaskList = ({ data = [], onToggle = () => {}, onDelete = () => {}, onRename = () => {} }) => {
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

export default TaskList;
