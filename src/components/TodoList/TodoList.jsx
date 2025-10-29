import React from 'react';
import Task from './Task';
import styles from './TodoList.module.css';

const TodoList = ({ data = [], onToggle = () => {}, onDelete = () => {} }) => {
    if (!Array.isArray(data) || data.length === 0) {
        return <div className={styles.empty}>No tasks yet</div>;
    }

    const handleOnToggle = (id) => onToggle(id);
    const handleOnDelete = (id) => onDelete(id);

    return (
        <div>
            {data.map((t) => (
                <Task
                    key={t.id ?? t.title}
                    id={t.id}
                    title={t.title}
                    done={!!t.done}
                    onToggle={handleOnToggle}
                    onDelete={handleOnDelete}
                />
            ))}
        </div>
    );
};

export default TodoList;
