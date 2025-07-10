const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL, {
    dbName: "day17",
  })
  .then(() => {
    console.log("----------db connected----------");
  })
  .catch((err) => {
    console.log("------------db connection error----------------------");
    console.log(err.message);
  });

// module.exports = { mongoose };
