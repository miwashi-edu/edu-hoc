import React from 'react';
import { LocalStorageTodoList } from '.'; // barrel

export default {
    title: 'HOC/LocalStorageTodoList',
    component: LocalStorageTodoList,
};

export const Default = {
    args:{
        seed:[
            'task 1',
            'task 2'
        ]
    }
};
