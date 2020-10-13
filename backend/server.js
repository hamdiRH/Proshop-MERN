const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const products = require("./data/products");
const app = express();
dotenv.config();
app.use(cors());
app.get("/", (req, res) => {
  res.send("API is running");
});
app.get("/api/product", (req, res) => {
  res.json(products);
});
app.get("/api/product/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
