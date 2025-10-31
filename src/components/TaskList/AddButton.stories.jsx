import React from 'react';
import {action} from 'storybook/actions';
import AddButton from './AddButton';

const onClick = action('onClick');

export default {
    title: 'Todo/AddButton',
    component: AddButton,
    args: {
        onClick,
    },
    argTypes: {
        label: { control: 'text' },
    },
};

export const Default = {};

export const CustomLabel = {
    args: { label: 'Add Task' },
};