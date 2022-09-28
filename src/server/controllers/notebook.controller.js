const { v4: uuidv4 } = require('uuid');
const db = require('../models');
const Notebooks = db.notebooks;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.label) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  // Create a Tutorial
  const notebook = new Notebooks({
    id: uuidv4(),
    label: req.body.label,
    icon: req.body.icon ? req.body.icon : 'bx bx-book-bookmark',
    pin: req.body.pin ? req.body.pin : 'N',
    noteslist: [],
    author: { id: 'jalpenshah', name: 'Jalpen Shah' },
    createdAt: '',
    lastModifiedAt: '',
  });

  // Save Tutorial in the database
  notebook
    .save(notebook)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Notebook.',
      });
    });
};

// Retrieve all Notebooks from the database.
exports.findAll = (req, res) => {
  console.log('fetching list');
  var condition = null;

  Notebooks.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving notebooks.',
      });
    });
};

// Retrieve all Notebooks from the database.
exports.findById = (req, res) => {
  Notebooks.findById(req.params.id, { author: 0 })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving notebooks.',
      });
    });
};

// Add note to existing notebook
exports.addNote = (req, res) => {
  let newNote = {
    id: uuidv4(),
    label: 'Untitled',
    desc: '',
    icon: 'bx bx-book-bookmark',
    pin: 'N',
    notebookId: req.body.notebookId,
  };

  Notebooks.updateOne({ id: newNote.notebookId })
    .then((data) => {
      console.log('newNote.notebookId', data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while note to notebook.',
      });
    });
};
