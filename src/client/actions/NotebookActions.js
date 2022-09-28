export const loadNotebooks = () => {
  return { type: "LOAD_NOTEBOOK" };
};
export const selectNotebook = (notebookId) => {
  return { type: "SELECT_NOTEBOOK", notebookId: notebookId };
};

export const selectNote = (noteId) => {
  return { type: "SELECT_NOTE", noteId: noteId };
};

export const addNotebook = () => {
  return { type: "ADD_NOTEBOOK" };
};

export const openNotebooksPage = () => {
  return { type: "OPEN_NOTEBOOK_PAGE" };
};

export const addNote = () => {
  return { type: "ADD_NOTE" };
};

export const changeNoteHeader = (header) => {
  return { type: "CHANGE_NOTE_HEADER", header: header };
};
