import React from 'react';
import { TransientTodoList } from '.'; // barrel

export default {
    title: 'HOC/TransientTodoList',
    component: TransientTodoList,
};

export const Default = {
    render: () => (
        <TransientTodoList seed={['task 1', 'task 2']} />
    ),
};
