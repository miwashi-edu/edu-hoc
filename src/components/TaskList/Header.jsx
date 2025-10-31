import React from 'react';
import styles from './TaskList.module.css';
import AddButton from './AddButton';
import SortButton from './SortButton';

const Header = ({ title = 'Todos', onAddTask, onToggleSort, isSortAsc, children }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.headerRow}>
                <div className={styles.title}>{title}</div>
                <div className={styles.headerActions}>
                    {typeof isSortAsc === 'boolean' && onToggleSort && (
                        <SortButton isAsc={isSortAsc} onToggle={onToggleSort} />
                    )}
                    {onAddTask && <AddButton onClick={onAddTask} />}
                </div>
            </div>
            <div className={styles.listArea}>{children}</div>
        </div>
    );
};

export default Header;
