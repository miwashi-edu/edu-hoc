import React from 'react';
import { action } from 'storybook/actions';
import TaskTitle from './TaskTitle';

const onRename = action('onRename');

export default {
    title: 'Todo/TaskTitle',
    component: TaskTitle,
};

export const Default = {
    args: {
        id: 1,
        title: 'Buy milk!',
        onRename,
    },
};

export const LongTitle = {
    args: {
        title:
            'This is a very long task title that should truncate or wrap nicely depending on your CSS rules',
        onRename,
    },
};