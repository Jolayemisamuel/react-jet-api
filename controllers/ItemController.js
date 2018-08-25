const Item = require("../models/Item");

exports.GetAllItems = (req, res) => {
    Item.find({}, (err, item) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(item);
  });
};

exports.AddItem = (req, res) => {
  let newItem = new Item(req.body);    
  newItem.save((err, item) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(item);
  });
};

exports.GetItem = (req, body) => {
  Item.findById(req.params.id, (err, item) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(item);
  });
};

exports.updateItem = (req, res) => {
  Item.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, item) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(item);
    }
  );
};

exports.deleteItem = (req, res) => {
  Item.remove({ _id: req.params.id }, (err, item) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Item successfully deleted" });
  });
};