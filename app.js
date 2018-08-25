// app.js

const express = require("express");
const bodyParser = require("body-parser");
const itemController = require("./controllers/ItemController");
const typeController = require("./controllers/ItemTypeController");

require("./config/db");

const app = express();

const port = process.env.PORT || 3301;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app
  .route("/items")
  .get(itemController.GetAllItems)
  .post(itemController.AddItem);

app
  .route("/items/:id")
  .get(itemController.GetItem)
  .put(itemController.updateItem)
  .delete(itemController.deleteItem);

app
  .route("/types")
  .get(typeController.GetAllTypes)


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});