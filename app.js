require("dotenv").config();

const expressLayouts = require("express-ejs-layouts");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const connectDB = require("./server/config/db");
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(expressLayouts);
app.use(express.static("public"));
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use("/", require("./server/routes/main"));

// const insertPostData = require("./server/routes/dummydate");
// insertPostData();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
