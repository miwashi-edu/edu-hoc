import React from 'react';
import { action } from 'storybook/actions';
import TaskList from './TaskList.jsx'

const onToggle = action('onToggle');
const onDelete = action('onDelete');
const onRename = action('onRename');



export default {
    title: 'Todo/TaskList',
    component: TaskList,
}

export const Default = {
    args: {
        data: [
            {id: '1', title: 'task 1'},
            {id: '2', title: 'task 2'}
        ],
        onToggle: onToggle,
        onDelete: onDelete,
        onRename: onRename,
    }
}

export const EmptyData = {
    args: {
        data: []
    },
    onToggle: onToggle,
    onDelete: onDelete,
    onRename: onRename,
}

export const MissingData = {
    args: {
        data: []
    },
    onToggle: onToggle,
    onDelete: onDelete,
    onRename: onRename,
}

export const MissingEventHandlers = {
    args:{
        data: [
            {id: '1', title: 'task 1'},
            {id: '2', title: 'task 2'}
        ],
    }
}