import React from 'react';
import SortButton from './SortButton';

export default {
    title: 'Todo/SortButton',
    component: SortButton,
    args: {
        isAsc: true,
        onToggle: () => console.log('toggle sort'),
    },
    argTypes: {
        isAsc: { control: 'boolean' },
    },
};

export const Ascending = {};

export const Descending = {
    args: { isAsc: false },
};