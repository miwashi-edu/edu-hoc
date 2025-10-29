import React from 'react';
import TaskTitle from './TaskTitle';

export default {
    title: 'Todo/TaskTitle',
    component: TaskTitle,
    args: {
        id: 'task-1',
        title: 'Buy milk',
        onRename: (id, next) => console.log('rename', { id, next }),
    },
};

export const Default = {};

export const LongTitle = {
    args: {
        title:
            'This is a very long task title that should truncate or wrap nicely depending on your CSS rules',
    },
};