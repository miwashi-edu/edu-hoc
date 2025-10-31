import"./iframe-BCkc3reA.js";import{T as o}from"./TaskTitle-CwG-zTxm.js";import"./preload-helper-PPVm8Dsz.js";import"./jsx-runtime-D_zvdyIk.js";import"./TaskList.module-CRm6BJFI.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,r=a("onRename"),m={title:"Todo/TaskTitle",component:o},e={args:{id:1,title:"Buy milk!",onRename:r}},t={args:{title:"This is a very long task title that should truncate or wrap nicely depending on your CSS rules",onRename:r}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    id: 1,
    title: 'Buy milk!',
    onRename
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'This is a very long task title that should truncate or wrap nicely depending on your CSS rules',
    onRename
  }
}`,...t.parameters?.docs?.source}}};const p=["Default","LongTitle"];export{e as Default,t as LongTitle,p as __namedExportsOrder,m as default};
