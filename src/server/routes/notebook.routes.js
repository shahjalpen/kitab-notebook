module.exports = (app) => {
  const notebooks = require('../controllers/notebook.controller.js');

  var router = require('express').Router();

  // Create a new Notebook
  router.post('/', notebooks.create);

  // Get Notebook from id
  router.get('/:id', notebooks.findById);

  // Get list of Notebooks
  router.get('/list', notebooks.findAll);

  // Add Notes to existing notebook
  router.post('/addNotebook', notebooks.addNote);

  // Add Notes to existing notebook
  //router.post('/updateNotebook', notebooks.updateNote);

  app.use('/api/notebooks', router);
};
