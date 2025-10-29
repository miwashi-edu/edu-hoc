import React from 'react';
import styles from './TodoList.module.css';

// isAsc: true → incomplete first; false → done first
const SortButton = ({ isAsc, onToggle }) => (
    <button
        type="button"
        className={styles.sortButton ?? styles.addButton}
        onClick={onToggle}
        aria-label={isAsc ? 'Sort: Incomplete → Done' : 'Sort: Done → Incomplete'}
        title={isAsc ? 'Incomplete → Done' : 'Done → Incomplete'}
    >
        {isAsc ? '↓' : '↑'}
    </button>
);

export default SortButton;
