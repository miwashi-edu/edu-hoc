import withTransientStorage from './withTransientStorage';
import withLocalStorage from './withLocalStorage';
import withSessionStorage from './withSessionStorage';
import TodoList from './TodoList';


export const TransientTodoList = withTransientStorage(TodoList);
export const LocalStorageTodoList = withLocalStorage(TodoList);
export const SessionStorageTodoList = withSessionStorage(TodoList);