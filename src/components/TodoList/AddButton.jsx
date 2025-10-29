import React from 'react';
import styles from './TodoList.module.css';

const AddButton = ({ onClick, label = '+' }) => (
    <button
        type="button"
        className={styles.addButton}
        onClick={onClick}
        aria-label="Add task"
    >
        {label}
    </button>
);

export default AddButton;
