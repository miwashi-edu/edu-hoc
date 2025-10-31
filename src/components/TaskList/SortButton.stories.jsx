import React from 'react';
import {action} from 'storybook/actions';
import SortButton from './SortButton';

const onToggle = action('onToggle');

export default {
    title: 'Todo/SortButton',
    component: SortButton,
    args: {
        isAsc: true,
        onToggle
    },
    argTypes: {
        isAsc: { control: 'boolean' },
    },
};

export const Ascending = {};

export const Descending = {
    args: {
        isAsc: false,
        onToggle
    },
};