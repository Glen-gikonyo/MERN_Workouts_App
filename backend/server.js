require("dotenv").config();
const express = require("express");
const workOutRoutes = require("./routes/workouts");
//express app
const app = express();
const mongoose = require("mongoose");

//middleware
app.use(express.json()); // enables use of requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workOutRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

//listen for request
