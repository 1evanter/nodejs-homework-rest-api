const app = require("./app");
const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://levanter:319IJOOQjwHp68B3@cluster0.io0dw2f.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(8000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
