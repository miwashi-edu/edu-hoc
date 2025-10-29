import React from 'react';
import styles from './TodoList.module.css';

const Header = ({ title = 'Todos', onAddTask, children }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.headerRow}>
                <div className={styles.title}>{title}</div>
                <button
                    type="button"
                    className={styles.addButton}
                    onClick={onAddTask}
                >
                    + Add
                </button>
            </div>

            <div className={styles.listArea}>
                {children}
            </div>
        </div>
    );
};

export default Header;
