import withTransientStorage from './withTransientStorage';
import withLocalStorage from './withLocalStorage';
import withSessionStorage from './withSessionStorage';
import TaskList from './TaskList.jsx';


export const TransientTodoList = withTransientStorage(TaskList);
export const LocalStorageTodoList = withLocalStorage(TaskList);
export const SessionStorageTodoList = withSessionStorage(TaskList);