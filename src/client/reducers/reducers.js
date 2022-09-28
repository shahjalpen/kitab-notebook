import InitialState from '../constants/InitiateState';
import MockData from '../constants/MockData';
import { v4 as uuidv4 } from 'uuid';

export default (state = InitialState, action) => {
  switch (action.type) {
    case 'rotate':
      return {
        rotating: action.payload,
      };
    case 'LOAD_MAIN_MENU':
      return {
        ...state,
        menuItem: action.menuItem,
      };
    case 'LOAD_NOTEBOOK':
      let notebookList = MockData.fetchNotebookList();
      console.info('List of notebooks received is ', notebookList);
      return {
        ...state,
        notebooks: notebookList,
      };
    case 'ADD_NOTE':
      let newNote = {
        id: uuidv4(),
        label: 'Untitled',
        desc: '',
        icon: 'bx bx-book-bookmark',
        pin: 'N',
        notebookLabel: 'Javascript',
      };
      let noteDetails = {
        id: newNote.id,
        label: newNote.label,
        notebookLabel: newNote.notebookLabel,
        author: { id: 'jalpenshah', name: 'Jalpen Shah' },
        createdAt: '',
        lastModifiedAt: '',
        content: {},
      };
      MockData.addNote(noteDetails);
      return {
        ...state,
        selectedNotebook: {
          ...state.selectedNotebook,
          notes: [...state.selectedNotebook.notes, newNote],
        },
      };
    case 'ADD_NOTEBOOK':
      let newNotebook = {
        id: uuidv4(),
        label: 'Untitled',
        notes: [],
        icon: 'bx bx-book-bookmark',
        pin: 'N',
        notesList: [],
        author: { id: 'jalpenshah', name: 'Jalpen Shah' },
        createdAt: '',
        lastModifiedAt: '',
        notebookInfoPage: '',
      };
      return {
        ...state,
        notebooks: [...state.notebooks, newNotebook],
      };
    case 'SELECT_NOTE':
      let note = MockData.fetchNoteObject(action.noteId);
      console.log('Note seleted', note);
      return {
        ...state,
        contentPage: {
          type: 'Note',
          content: note.length > 0 ? note[0] : null,
        },
      };
    case 'SELECT_NOTEBOOK':
      let selectedNotebook = state.notebooks.filter((notebooks) => notebooks.id == action.notebookId);
      console.log('selectedNotebook: ', selectedNotebook);
      return {
        ...state,
        selectedNotebook: selectedNotebook.length > 0 ? selectedNotebook[0] : null,
      };
    case 'TOGGLE_MAIN_MENU_VIEW':
      return {
        ...state,
        mainMenuCollapse: state.mainMenuCollapse ? false : true,
      };
    case 'OPEN_SECONDARY_MENU_VIEW':
      console.log('selectedmenu', action.data.menuId);
      return {
        ...state,
        hideSecondaryMenu: state.hideSecondaryMenu ? false : true,
        selectedMenu: action.data.menuId,
      };
    case 'CLOSE_SECONDARY_MENU_VIEW':
      return {
        ...state,
        hideSecondaryMenu: true,
      };
    case 'TOGGLE_SECONDARY_MENU_VIEW':
      return {
        ...state,
        hideSecondaryMenu: state.hideSecondaryMenu ? false : true,
      };
    case 'OPEN_SETTINGS_VIEW':
      return {
        ...state,
        settingsModal: true,
      };
    case 'CLOSE_SETTINGS_VIEW':
      return {
        ...state,
        settingsModal: false,
      };
    case 'OPEN_NOTEBOOK_PAGE':
      return {
        ...state,
        selectedNotebook: null,
      };
    case 'CHANGE_NOTE_HEADER':
      return {
        ...state,
        contentPage: {
          content: {
            label: header,
          },
        },
      };
    default:
      return state;
  }
};
