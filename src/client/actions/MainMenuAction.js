export const selectMainMenu = (menuId) => {
  console.log("Selected menu");
};

export const loadMainMenuItems = () => {
  console.log("loading main menu");
  return { type: "LOAD_MAIN_MENU" };
};

export const toggleMainMenu = () => {
  console.log("in TOGGLE_MAIN_MENU_VIEW action");
  return { type: "TOGGLE_MAIN_MENU_VIEW" };
};

export const openSecondaryMenu = (menuId) => {
  console.log("in OPEN_SECONDARY_MENU_VIEW action", menuId);
  return { type: "OPEN_SECONDARY_MENU_VIEW", data: { menuId: menuId } };
};

export const closeSubMenu = () => {
  console.log("in CLOSE_SECONDARY_MENU_VIEW action");
  return { type: "CLOSE_SECONDARY_MENU_VIEW" };
};

export const toggleSubMenu = () => {
  console.log("in toggleSubMenu action");
  return { type: "TOGGLE_SECONDARY_MENU_VIEW" };
};

export const openSettingsPage = () => {
  console.log("in openSettingsPage action");
  return { type: "OPEN_SETTINGS_VIEW" };
};

export const closeSettingsPage = () => {
  console.log("in closeSettingsPage action");
  return { type: "CLOSE_SETTINGS_VIEW" };
};
