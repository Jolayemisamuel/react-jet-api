const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemTypesSchema = new Schema({
  name: {
    type: String,
    required: true
  }  
});

module.exports = mongoose.model("ItemTypes", ItemTypesSchema);