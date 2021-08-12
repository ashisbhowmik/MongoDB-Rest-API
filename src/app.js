const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/conn");
const StudentRouter = require("./routers/allRequest");

// this works as a middleware to get the data and input from postman
app.use(express.json());

// for all Routers
app.use(StudentRouter);

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
