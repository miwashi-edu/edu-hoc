import"./iframe-BCkc3reA.js";import{T as c}from"./TaskList-DAJguR42.js";import"./preload-helper-PPVm8Dsz.js";import"./jsx-runtime-D_zvdyIk.js";import"./Task-Dbnuns2n.js";import"./TaskTitle-CwG-zTxm.js";import"./TaskList.module-CRm6BJFI.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,s=o("onToggle"),r=o("onDelete"),i=o("onRename"),T={title:"Todo/TaskList",component:c},e={args:{data:[{id:"1",title:"task 1"},{id:"2",title:"task 2"}],onToggle:s,onDelete:r,onRename:i}},a={args:{data:[]},onToggle:s,onDelete:r,onRename:i},n={args:{data:[]},onToggle:s,onDelete:r,onRename:i},t={args:{data:[{id:"1",title:"task 1"},{id:"2",title:"task 2"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      id: '1',
      title: 'task 1'
    }, {
      id: '2',
      title: 'task 2'
    }],
    onToggle: onToggle,
    onDelete: onDelete,
    onRename: onRename
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  },
  onToggle: onToggle,
  onDelete: onDelete,
  onRename: onRename
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  },
  onToggle: onToggle,
  onDelete: onDelete,
  onRename: onRename
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      id: '1',
      title: 'task 1'
    }, {
      id: '2',
      title: 'task 2'
    }]
  }
}`,...t.parameters?.docs?.source}}};const k=["Default","EmptyData","MissingData","MissingEventHandlers"];export{e as Default,a as EmptyData,n as MissingData,t as MissingEventHandlers,k as __namedExportsOrder,T as default};
