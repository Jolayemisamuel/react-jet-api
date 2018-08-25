const Type = require("../models/ItemsType");

exports.GetAllTypes = (req, res) => {
    Type.find({}, (err, type) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(type);
  });
};