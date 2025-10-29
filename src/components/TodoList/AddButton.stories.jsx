// AddButton.stories.jsx
import React from 'react';
import AddButton from './AddButton';

export default {
    title: 'Todo/AddButton',
    component: AddButton,
    args: {
        label: '+ Add',
        onClick: () => console.log('add clicked'),
    },
    argTypes: {
        label: { control: 'text' },
    },
};

export const Default = {};

export const CustomLabel = {
    args: { label: 'Add Task' },
};