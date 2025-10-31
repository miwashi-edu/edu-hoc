import React from 'react';
import { SessionStorageTodoList } from '.'; // barrel

export default {
    title: 'HOC/SessionStorageTodoList',
    component: SessionStorageTodoList,
};

export const Default = {
    args:{
        seed:[
            'task 1',
            'task 2'
        ]
    }
};
