import React from 'react';
import styles from './TaskList.module.css';

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
