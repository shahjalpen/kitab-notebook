import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers/reducers";
import { notebookMiddleware } from "../middleware/NotebookMiddleware";

function configureStore() {
  return createStore(reducers, applyMiddleware(notebookMiddleware));
}

export default configureStore;
