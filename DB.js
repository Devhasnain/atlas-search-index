const mongoose = require("mongoose");

const DB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("connected to db");
    })
};
module.exports = DB;
