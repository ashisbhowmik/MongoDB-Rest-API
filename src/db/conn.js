const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/student_registration", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection is successful....");
  })
  .catch((err) => {
    console.log("Connection Break");
  });
