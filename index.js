import express from "express";

const app = express();

const port = 8080;

app.get("/", (req, res) => {
  res.send("hello from Praveen Singh");
});
app.get("/tea", (req, res) => {
  res.send("Welcome to praveen portfolie");
});
app.use(express.json());
let teaData = [];
let nextTea = 1;
// How to put tea
app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: nextTea++, name, price };
  teaData.push(newTea);
  res.status(201).send(newTea);
});
// How to get tea
app.get("/teas", (req, res) => {
  res.status(201).send(teaData);
});
// How to get tea with id
app.get("/teas/:id", (req, res) => {
  teaData.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("Tea is not found");
  }
  res.status(200).send(tea);
});
// How to update tea
app.put("/teas/:id", (req, res) => {
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("Tea not found");
  }
  const { name, price } = req.body;
  tea.name = name;
  tea.price = price;
  res.status(200).send(tea);
});
// How to delete tea
app.delete("teas/:id", (req, res) => {
  teaData.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send("Tea not Found");
  }
  teaData.splice(index, 1);
  return res.status(204).send("deleted");
});
app.listen(port, () => {
  console.log(`Server is running on port: ${port}....`);
});
