export const notebookMiddleware = (store) => (next) => (action) => {
  console.log("Middleware triggered:", action);
  switch (action.type) {
    case "LOAD_MAIN_MENU":
      action.menuItem = [
        {
          id: "notebooks",
          label: "Notebooks",
          icon: "bx bx-book-bookmark",
          isFunctional: true,
        },
        {
          id: "reminders",
          label: "Reminders",
          icon: "bx bx-alarm",
          isFunctional: false,
        },
        {
          id: "calendar",
          label: "Calendar",
          icon: "bx bx-calendar",
          isFunctional: false,
        },
        {
          id: "tags",
          label: "Tags",
          icon: "bx bx-purchase-tag",
          isFunctional: false,
        },
        {
          id: "todos",
          label: "To Do's",
          icon: "bx bx-list-ul",
          isFunctional: false,
        },
        {
          id: "archives",
          label: "Archives",
          icon: "bx bx-archive",
          isFunctional: false,
        },
      ];
    case "SAVE_NOTE":
      console.log("calling service to save note");
  }
  console.log("After Middleware: ", action);
  next(action);
};
