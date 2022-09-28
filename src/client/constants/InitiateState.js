import NotebookState from './NotebookState';
import ReminderState from './ReminderState';
import TodoState from './TodosState';

export default {
  theme: 'basic',
  loading: false,
  messages: {
    info: [],
    error: [],
  },
  menuItem: [],
  selectedMenu: 'notebooks',
  mainMenuCollapse: true,
  hideSecondaryMenu: false,
  isLoggedIn: false,
  loggedinUser: null,
  contentPage: { type: 'Welcome', content: {} },
  settingsModal: false,

  ...NotebookState,
  ...ReminderState,
  ...TodoState,
};
