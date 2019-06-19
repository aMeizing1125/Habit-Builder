const db = require("../models");

// set methods we'll use to access the todo Model

module.exports = {
    findTodos: function(req, res) {
        db.Todo
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    createTodo: function(req, res) {
        db.Todo
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    updateTodo: function(req, res) {
        db.Todo
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    removeTodo: function(req, res) {
        db.Todo
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    }
};